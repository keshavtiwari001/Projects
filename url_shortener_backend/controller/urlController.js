const shortid = require("shortid");
const URL = require("../models/urlSchema");

// Helper function to generate a unique short ID
async function generateUniqueShortId() {
  let shortId;
  let isUnique = false;

  while (!isUnique) {
    shortId = shortid.generate();
    const existingUrl = await URL.findOne({ shortId });
    if (!existingUrl) {
      isUnique = true;
    }
  }
  return shortId;
}

async function handleGenerateURL(req, res) {
  const body = req.body;

  if (!body.url) {
    return res.status(400).json({ error: "url is required !!" });
  }

  try {
    // Generate a unique short ID
    const shortId = await generateUniqueShortId();

    // Insert the URL with the generated short ID
    await URL.create({
      shortId,
      redirectURL: body.url,
      visitHistory: [],
    });

    return res.json({ id: shortId });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Error shortening URL" });
  }
}

async function handleShortID(req, res) {
  const shortId = req.params.shortId;

  try {
    const entry = await URL.findOneAndUpdate(
      { shortId },
      {
        $push: {
          visitHistory: {
            timestamp: Date.now(),
          },
        },
      },
      { new: true } // Return the updated document
    );

    if (!entry) {
      return res.status(404).json({ error: "Short ID not found" });
    }

    res.redirect(entry.redirectURL);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Error handling short ID" });
  }
}

async function handleAnalytics(req, res) {
  const shortId = req.params.shortId;

  try {
    const result = await URL.findOne({ shortId });

    if (!result) {
      return res.status(404).json({ error: "Short ID not found" });
    }

    return res.json({
      totalClicks: result.visitHistory.length,
      analytics: result.visitHistory,
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Error retrieving analytics" });
  }
}

module.exports = {
  handleGenerateURL,
  handleShortID,
  handleAnalytics,
};

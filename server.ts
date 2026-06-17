import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
  });

  app.get("/api/health", (req, res) => {
    res.json({ status: "ok" });
  });

  app.post("/api/contact", async (req, res) => {
    try {
      const {
        full_name,
        email,
        phone,
        business_name,
        service_interested_in,
        message,
        sms_consent,
        consent_text,
        consent_timestamp,
        source,
        page_url
      } = req.body;

      const payload = {
        full_name: full_name || "",
        email: email || "",
        phone: phone || "",
        business_name: business_name || "",
        service_interested_in: service_interested_in || "",
        message: message || "",
        sms_consent: !!sms_consent,
        consent_text: consent_text || "",
        consent_timestamp: consent_timestamp || new Date().toISOString(),
        source: source || "Aldosia Contact Form",
        page_url: page_url || ""
      };

      console.log("Contact form submission payload:", payload);

      let webhookUrl = process.env.GHL_WEBHOOK_URL;
      const targetWebhook = "https://services.leadconnectorhq.com/hooks/nDM0WWTnUfiKBHf3zTKU/webhook-trigger/3fbd06a4-56b0-4a2d-89b6-49ea7a61c5a9";

      // Fallback to the explicit GHL Webhook if environment variable is not set or keeps placeholder
      if (!webhookUrl || webhookUrl.trim() === "" || webhookUrl.includes("PASTE_GHL")) {
        webhookUrl = targetWebhook;
      }

      // Proxy the request to GoHighLevel Webhook
      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error(`GHL Webhook returned error: ${response.status} ${response.statusText} - ${errorText}`);
        return res.status(502).json({
          success: false,
          message: "The server failed to submit the form down the line."
        });
      }

      console.log("Successfully forwarded contact form submission to GoHighLevel CRM.");
      return res.status(200).json({
        success: true,
        message: "Thank you. Your message has been received and we’ll contact you shortly."
      });
    } catch (error: any) {
      console.error("Error in /api/contact handler:", error);
      return res.status(500).json({
        success: false,
        message: "An internal server error occurred while processing your request."
      });
    }
  });

  let vite: any;
  if (process.env.NODE_ENV !== "production") {
    vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.resolve(__dirname, "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();

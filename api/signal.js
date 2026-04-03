export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const data = req.body;

      global.signalData = {
        signal: data.signal || "NONE",
        price: data.price || "",
        time: new Date().toLocaleString("zh-TW", { hour12: false })
      };

      return res.status(200).json({
        success: true,
        message: "Signal received",
        data: global.signalData
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: "Server error",
        error: error.message
      });
    }
  }

  if (req.method === "GET") {
    return res.status(200).json(
      global.signalData || {
        signal: "WAITING",
        price: "",
        time: ""
      }
    );
  }

  return res.status(405).json({
    success: false,
    message: "Method not allowed"
  });
}

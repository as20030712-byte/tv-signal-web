export default async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    // 存在記憶體（簡單版）
    global.signalData = data;

    return res.status(200).json({ success: true });
  }

  if (req.method === "GET") {
    return res.status(200).json(global.signalData || {});
  }
}

import Complaint from '../models/complaint.model.js';

export const submitComplaint = async (req, res) => {
  const { category, message } = req.body;

  try {
    await Complaint.create({ category, message });
    res.redirect('/'); 
  } catch (err) {
    console.error('Error saving complaint:', err);
    res.status(500).send('שגיאה בשמירת התלונה');
  }
};

export const showAdminPage = async (req, res) => {
  const { password } = req.body;

  if (password !== process.env.ADMIN_PASSWORD) {
    return res.status(403).send('<h1>403 - סיסמה שגויה</h1>');
  }

  try {
    const complaints = await Complaint.find().sort({ createdAt: -1 });
    let html = `<h1>רשימת תלונות</h1><ul>`;
    complaints.forEach(c => {
      html += `<li><strong>${c.category}</strong>: ${c.message} <em>(${new Date(c.createdAt).toLocaleString('he-IL')})</em></li>`;
    });
    html += `</ul><a href="/">חזרה לדף הבית</a>`;
    res.send(html);
  } catch (err) {
    res.status(500).send('שגיאה בטעינת התלונות');
  }
};

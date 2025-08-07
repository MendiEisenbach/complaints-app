import express from 'express';
import { submitComplaint, showAdminPage } from '../controllers/complaintsController.js';

const router = express.Router();

router.post('/submit', submitComplaint);
router.post('/admin', showAdminPage);

export default router;

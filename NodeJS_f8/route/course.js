const express = require('express');
const router = express.Router();

const coursesController = require('../app/controllers/CourseController');

router.get('/create',coursesController.create);
router.post('/store',coursesController.store);
router.get('/:id/edit',coursesController.edit);
router.put('/:id/update',coursesController.update);
router.get('/:id/bfdelete',coursesController.beforedelete);
router.delete('/:id/delete',coursesController.delete);
router.get('/:slug',coursesController.lead);
router.get('/',coursesController.show);

module.exports = router;

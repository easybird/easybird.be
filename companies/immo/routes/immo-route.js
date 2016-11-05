import express from 'express';
import createContractRenderMiddleware from '../middleware/render/createContractRenderMiddleware';
import createContract from '../middleware/contract/createContract';
import createPdf from '../middleware/contract/createPdf';

var router = express.Router();

// /immo
router.get(
    '/',
    createContractRenderMiddleware
);

router.post(
    '/',
    createContract,
    createPdf,
    (req, res) => res.json({'test': 'received!!!'})
);

module.exports = router;

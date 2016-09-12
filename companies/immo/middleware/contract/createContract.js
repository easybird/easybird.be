import ContractForm from './ContractForm';

/**
 *
 * @param req.body
 * @return req.contractForm
 */
export default function createContract(req, res, next) {
    console.log(`req.body:${JSON.stringify(req.body)}`);

    req.contractForm = new ContractForm(req.body);
    
    return next();
}
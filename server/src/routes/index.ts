import { Router } from 'express';
import applicationRoute from './application'
import verifierRoute from './verifier'

export default (router: Router) => {
  router.get('/application', applicationRoute);
  router.get('/verify', verifierRoute);
};

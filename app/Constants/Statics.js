// @flow

import ENV from 'react-native-config';
import APP from '../../app.json';

const CONFIG = {
  API_URL: ENV.API_URL,
  TIME_OUT: ENV.TIME_OUT,
  BUILD_TYPE: ENV.ENV
};

const APP_INFO = {
  APP_NAME: APP.displayName,
  VERSION: APP.version,
  BUILD_NUMBER: APP.buildNumber

};

const RESPONSE_CODE = {
  success: 200,
  created: 201,
  accepted: 202,
  success_no_return: 204,
  bad_request: 400,
  unauthorized: 401,
  forbidden: 403,
  not_found: 404,
  unprocessable_entity: 422,
  server_error: 500,
  server_down: 503,
  server_timeout: 504
};

const RESPONSE_STATUS = {
  OK: 'OK',
  REQUEST_FAILED: 'REQUEST_FAILED',
  REQUEST_DENIED: 'REQUEST_DENIED',
  INVALID_REQUEST: 'INVALID_REQUEST'
};

export { CONFIG, APP_INFO, RESPONSE_CODE, RESPONSE_STATUS };

declare namespace NodeJS {
  interface ProcessEnv {
    REACT_APP_CURRENT_RUNNING_ENVIRONMENT:
      | 'dev'
      | 'prod'
      | 'stage'
      | 'uat1'
      | 'uat2'
      | 'uat3'
      | 'uat4';
    REACT_APP_DOMAIN: string;
    REACT_APP_FILE_SERVICE_URL: string;
    REACT_APP_IMAGE_SERVICE_URL: string;
    REACT_APP_GQL_ENDPOINT: string;
    REACT_APP_GQL_REQUEST_MARK:
      | 'gibbs-authorization-stage'
      | 'gibbs-authorization-uat1'
      | 'gibbs-authorization-uat2'
      | 'gibbs-authorization-uat3'
      | 'gibbs-authorization-uat4';
    REACT_APP_CDN_SERVICE_URL: string;
    REACT_APP_WIDGET_ENVIRONMENT: 'DEV' | 'Stage' | 'UAT' | 'UAT2' | 'UAT3' | 'UAT4';
    /**
     * defined in circle ci
     */
    NAMESPACE?: 'prod' | 'stage' | 'uat1' | 'uat2' | 'uat3' | 'uat4';
  }
}

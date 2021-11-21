import {configure} from 'enzyme';
import '@testing-library/jest-dom/extend-expect';
import Adapter from 'enzyme-adapter-react-16';
require('jest-extended');

configure({adapter: new Adapter()});

const config = {
  "jest": {
    "setupTestFrameworkScriptFile": "jest-extended"
  }
}

export default config;
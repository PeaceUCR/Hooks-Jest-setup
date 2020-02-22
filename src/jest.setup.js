import 'babel-polyfill';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import chai from 'chai';
import chaiEnzyme from 'chai-enzyme';
import { mount, render, shallow } from 'enzyme';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import chaiAsPromised from 'chai-as-promised';

Enzyme.configure({ adapter: new Adapter() });

chai.use(sinonChai);
chai.use(chaiEnzyme());
chai.use(chaiAsPromised);

//Property 'mount' does not exist on type 'Global'.
// have to import in each test
// global.sinon = sinon;
// global.mount = mount;
// global.render = render;
// global.shallow = shallow;

import _ from 'lodash';
import { background } from './render/background';
import "./css/style.css";

console.log(_.map([1, 2, 3], (x) => x * background()));

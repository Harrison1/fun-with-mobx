import {observable} from 'mobx';
import { ALL_TODOS } from '../constants';

export default class ViewStore {
	@observable heroList = ['Superman', 'Wonder Woman', 'Batman', 'Lara Croft'];
}
import {observable} from 'mobx';

export default class ViewStore {
	@observable heroList = ['Superman', 'Wonder Woman', 'Batman', 'Lara Croft'];
}

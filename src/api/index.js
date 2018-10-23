import Axios from '@/api/config.js'

export default {
	getFirstCategory: fistCateGoryInfo => Axios.get('/category/getFirstCategoryInfo'),
	getSecendCategory: secendCateGoryInfo => Axios.get('/category/getSecendCategoryInfo',  { params: { id: `${firstCategoryId}` } }),
	
	getYearsInfo: yearInfo => Axios.get('/year/getYearsInfo'),
	// logout: user => Axios.post('/logout',user),
	// sendWatsonMessage: (context, input) => Axios.post('/send/message', {context,input}),
	// saveMsgToCloudant:msgObj => Axios.post('/save/message', msgObj),
	// getWatsonFinanceList: (params) => Axios.post('/watson/finance/list', params),
	// getWatsonFinanceDetail: (record_record_no) => Axios.get('/watson/finance/detail', { params: { record_no: `${record_record_no}` } }),
	// getNoticeData: () => Axios.get('/watson/finance/notice'),
	// getResultFromDiscovery:(params) => Axios.get('/search/discovery', { params: { voucher_num: `${params.voucher_num}` || '',
	// application_num: `${params.application_num}` || '',filter:`${params.filter}`,type:`${params.type}` }}),
	// getWorkApplication:application_num => Axios.get('/work/application', { params: { application_num: `${application_num}` } }),
	// getWfTableDetail:voucher_num => Axios.get('/journal/detail', { params: { voucher_num: `${voucher_num}` } }),
	// getAccountByProcess:process_code => Axios.get('/account/code', { params: { process_code: `${process_code}` } }),
	// journalCancle:params => Axios.post('/journal/cancel', params),
	// journalCancleCreate:params => Axios.post('/journal/cancel/create', params),
	// journalCreate:params => Axios.post('/journal/create', params),
	// discoveryTraining:params => Axios.post('/discovery/training', params),
	
	
}
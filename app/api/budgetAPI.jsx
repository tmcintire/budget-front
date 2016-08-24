var axios = require('axios');

const FIREBASE_URL='https://testing-3beea.firebaseio.com/Name.json';
const expensesURL = "http://127.0.0.1:8000/api/expenses";
const incomeURL = "http://127.0.0.1:8000/api/income";

module.exports = {
	getBudget: function () {
		return axios
				.get(expensesURL)
				.then((res) => res.data)
	},

	getIncome: function () {
		return axios
				.get(incomeURL)
				.then((res) => res.data)
	}
}
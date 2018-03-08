var ApiUtils = {  
  checkStatus: function(response) {
    if (response.ok) {
      return response;
    } else {
      let error = new Error(response.statusText);
      error.response = response;
      throw error;
    }
  },

  verifyUser: function(user, pass) {
    return fetch('https://lab0api.herokuapp.com/api/member/verifyUser',{
      method: 'post',
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        'username': user,
        'password': pass,
      }),
      })
      .then(response => 
        response.json().then(data => ({
            data: data,
            status: response.status
        })
      ).then(res => {
          console.log("status : "+res.status,"verified : "+ res.data.status)
      }));
  },
};
export { ApiUtils as default };
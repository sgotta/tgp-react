import axios from 'axios';

const useFetchAPICore = (setProductos) => {
  let token = '';

  const user = {
    username: 'jbourdin',
    password: '12345678',
  };

  axios
    .post(`https://192.168.128.21/TGP.API.TemplateProject/auth/login`, { user })
    .then((res) => {
      // eslint-disable-next-line no-console
      console.log(res.data);
      token = res.data.message;
    })
    .then(() => {
      axios
        .get('https://192.168.128.21/TGP.API.TemplateProject/producto', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          setProductos(res.data.result);
          // eslint-disable-next-line no-console
          console.log(res.data.result);
        })
        .catch((error) => {
          // eslint-disable-next-line no-console
          console.error(error);
        });
    });
};

export default useFetchAPICore;

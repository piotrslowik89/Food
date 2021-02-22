import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization:
      'Bearer HWxLbZQY5SagVlF9uASIWIiuAu0kanSDj2gJWG3A62cb6AK29ybdyf_sGUWPFX3TGhn_dSpw9c9yT9LbxtgWTn7WlG98ZKwShYtlpSzt8m8lX5jZif-VclSb-IYtYHYx'
  }           
});
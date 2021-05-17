import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization : 'Bearer 4UD1i_qyEBDrJBEFas00vydn5Xc7SrbC6g-CuuGb22rnWV4L4NUex_rJWQkE9mQ3phMiiAPXJcPa7_NWvkJMJ-klAAS8uR7jz7yh6hY_98TCNmRo6i4gCBtEzpRIYHYx'
    }

});

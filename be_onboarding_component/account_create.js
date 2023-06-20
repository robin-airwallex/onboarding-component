const account_create_body = {
  account_details: {
    business_details: {
      address: {
        country_code: "GB",
      },
    },
  },
  customer_agreements: {
    agreed_to_data_usage: true,
    agreed_to_terms_and_conditions: true,
    opt_in_for_marketing: true,
  },
  primary_contact: {
    email: "robin661989@gmail.com",
  },
};

module.exports = account_create_body;

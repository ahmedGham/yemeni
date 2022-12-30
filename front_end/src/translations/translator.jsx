export const translateServices = (language, root_services) => {
  return root_services.map((service) => {
    if (language === "ar") {
      return {
        name: service.name_ar,
        description: service.description_ar,
        icon: service.icon,
      };
    } else if (language === "ru") {
      return {
        name: service.name_ru,
        description: service.description_ru,
        icon: service.icon,
      };
    } else {
      return { ...service };
    }
  });
};

export const translateContacts = (i18n, root_contacts) => {
  return root_contacts.map((contact) => {
    if (i18n.language === "ar") {
      return {
        name: contact.name_ar,
        icon: contact.icon,
        content: contact.content,
      };
    } else if (i18n.language === "ru") {
      return {
        name: contact.name_ru,
        icon: contact.icon,
        content: contact.content,
      };
    } else {
      return { ...contact };
    }
  });
};

export const translateCategories = (language, categories) => {
  return categories.map((category) => {
    if (language === "ar") {
      return {
        id:category.id,
        name: category.name_ar,
        img: category.img,
        grid_name: category.name,
      };
    } else if (language === "ru") {
      return {
        id: category.id,
        name: category.name_ru,
        img: category.img,
        grid_name: category.name,
      };
    } else {
      return { ...category,grid_name:category.name };
    }
  });
};



export const translateProducts = (language, products) => {
  return products?.map((product) => {
    let translatedProduct = null;
    if (language === "ar") {
      translatedProduct = {
        name: product.name_ar,
        description: product.description_ar,
      };
    } else if (language === "ru") {
      translatedProduct = {
        name: product.name_ru,
        description: product.description_ru,
      };
    } else {
      translatedProduct = {
        name: product.name,
        description: product.description,
      };
    }
    translatedProduct = {
      ...translatedProduct,
      image: product.image,
      price: product.price,
      id:product.id,
      category: translateCategories(language, product.category),
    };
    return translatedProduct;
  });
};


export const translateReviews = (language, root_reviews) => {
  return root_reviews.map((review) => {
    if (language === "ar") {
      return {
        text: review.text_ar,
      };
    } else if (language === "ru") {
      return {
        text: review.text_ru,
      };
    } else {
      return { ...review };
    }
  });
};

export const translateServices = (i18n, root_services) => {
  return root_services.map((service) => {
    if (i18n.language === "ar") {
      return {
        name: service.name_ar,
        description: service.description_ar,
        icon: service.icon,
      };
    } else if (i18n.language === "ru") {
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

export const translateCategories = (i18n, root_categories) => {
  return root_categories.map((category) => {
    if (i18n.language === "ar") {
      return {
        name: category.name_ar,
        img: category.img,
        grid_name: category.grid_name,
      };
    } else if (i18n.language === "ru") {
      return {
        name: category.name_ru,
        img: category.img,
        grid_name: category.grid_name,
      };
    } else {
      return { ...category };
    }
  });
};

export const translateCategory = (i18n, category) => {
   if (i18n.language === "ar") {
     return {
       translatedName: category.name_ar,
       img: category.img,
       name: category.name,
     };
   } else if (i18n.language === "ru") {
     return {
       translatedName: category.name_ru,
       img: category.img,
       name: category.name,
     };
   } else {
     return {
       translatedName: category.name,
       img: category.img,
       name: category.name,
     };
   }
};

export const translateDish = (i18n, dish) => {
  let translatedDish;
  if (i18n.language === "ar") {
    translatedDish = {
      name: dish.name_ar,
      description: dish.description_ar,
    };
  } else if (i18n.language === "ru") {
    translatedDish = {
      name: dish.name_ru,
      description: dish.description_ru,
    };
  } else {
    translatedDish = {
      name: dish.name,
      description: dish.description,
    };
  }
  translatedDish = { ...translatedDish, image: dish.image, price: dish.price };

  return translatedDish;
};

export const translateReviews = (i18n, root_reviews) => {
  return root_reviews.map((review) => {
    if (i18n.language === "ar") {
      return {
        text: review.text_ar,
      };
    } else if (i18n.language === "ru") {
      return {
        text: review.text_ru,
      };
    } else {
      return { ...review };
    }
  });
};

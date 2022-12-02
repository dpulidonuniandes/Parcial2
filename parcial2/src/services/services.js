const API_URL = 'http://localhost:3000/api/v1';
const dummieUser = { name: "Mateo Laguna", registration_date: "2022-07-05", birth_date: "1997-09-02", mail: "mateolaguna2552@gmail.com", username: "mlaguna10" }


// BOOK-REVIEW // // BOOK-REVIEW // // BOOK-REVIEW // // BOOK-REVIEW // // BOOK-REVIEW //
// BOOK-REVIEW // // BOOK-REVIEW // // BOOK-REVIEW // // BOOK-REVIEW // // BOOK-REVIEW //

export async function getAllReviews(bookId) {
  try {
    const response = await fetch(API_URL + '/books/'+bookId+'/reviews');
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("getAllReviews", error);
  }
}

export async function addReview(review) {
  try {
    const response = await fetch(API_URL + '/reviews', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(review) 
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("addReview",error);
  }
}

export async function getAllBooks() {
  try {
    debugger
    const response = await fetch(API_URL + '/books');
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("getAllBooks", error);
  }
}

export async function addBook(book) {
  try {
    debugger
    const response = await fetch(API_URL + '/books', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(book) 
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("addBook",error);
  }
}

export async function addReviewBook(bookId,reviewId) {
  try {
    debugger
    const response = await fetch(API_URL + '/books/'+bookId+'/reviews/'+reviewId, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("addReviewBook",error);
  }
}

export async function deleteReviewBook(bookId,reviewId) {
  try {
    debugger
    const response = await fetch(API_URL + '/books/'+bookId+'/reviews/'+reviewId, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("deleteReviewBook",error);
  }
}

// BOOK-REVIEW // // BOOK-REVIEW // // BOOK-REVIEW // // BOOK-REVIEW // // BOOK-REVIEW //
// BOOK-REVIEW // // BOOK-REVIEW // // BOOK-REVIEW // // BOOK-REVIEW // // BOOK-REVIEW //

export async function getAllUsers() {
  try {
    const response = await fetch(API_URL + '/users');
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("getAllUsers", error);
    return [dummieUser];
  }
}

export async function getAllComments() {
  try {
    const response = await fetch(API_URL + '/comments');
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("getAllComments", error);
  }
}

export async function addComment(comment) {
  try {
    const response = await fetch(API_URL + '/comments', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(comment) 
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("addComment",error);
  }
}

export async function getAllPosts() {
  try {
    const response = await fetch(API_URL + '/posts');
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("getAllPosts", error);
  }
}

export async function addPost(review) {
  try {
    const response = await fetch(API_URL + '/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(review) 
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("addPost",error);
  }
}

export async function getAllReadingPlans() {
  try {
    const response = await fetch(API_URL + '/reading-plans');
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("getAllReadingPlans", error);
  }
}

export async function getReadingPlan(id) {
  try {
    const response = await fetch(API_URL + '/reading-plan/' + {id});
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("getReadingPlan", error);
  }
}

export async function addReadingPlan(readingPlan) {
  try {
    const response = await fetch(API_URL + '/reading-plans', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(readingPlan) 
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("addReadingPlan",error);
  }
}
import http from "./http";

// METHOD để call Graphql duy nhất là 'POST' (bất cứ dùng axios hay fetch của js)
// `query` tương tự GET bên REST API, dùng để lấy dữ liệu và show lên
// `mutaion` tương tự các method còn lại bên REST API, dùng để delete, post, update, tương tác với dữ liệu

// Call graphql có 2 field quan trọng là `query` và `variables`

// 1. Query không truyền bất cứ params nào hết (thường mấy cái query all)
// Trong đó allFilms là điểm đến cần lấy dữ liệu (giống kiểu getAllTodos bên REST API để lấy toàn bộ Todo ra )
// và trong đó lấy field `films` là một object có chứa id, title, ... (muốn lấy field nào ra thì cứ ghi và enter xuống ghi tiếp)
// ví dụ dưới đây anh muốn query 5 field của `films` là id, title, director, producers, created thì anh điền rõ ra key của nó là được
export function getAllFilms() {
  return http
    .callGraphql({
      query: `query{
        allFilms {
          films {
            id 
            title
            director 
            producers 
            created 
          }
        }
      }`,
    })
    .then((resp) => {
      if (resp.data) return resp.data.data;
      return resp.data;
    })
    .catch((error) => {
      throw error;
    });
}

// 2. Query có truyền biến "ZmlsbXM6MQ=="
// Link document ở đây: https://studio.apollographql.com/public/star-wars-swapi/variant/current/schema/reference/objects/Root
// Link hình ảnh anh giải thích ở đây:
// Link 1: https://ibb.co/pz94gGB
// Link 2: https://ibb.co/TK0qNrk

// Trong javascript thì dữ liệu chỉ có string, number, boolean, object
// Trong graphql thì người ta thích đặt kiểu dữ liệu với tên tuỳ thích, ở đây là `ID`
// Nên chỗ query bên dưới mở ngoặc '(' và ')' phải ghi đúng kiểu dữ liệu field của BE định nghĩa là ID
// Đặt biến trong graphql thì mở đầu bằng ${{tên biến}}
// ở đây đặt 2 biến là $filmID và $id
// Chỗ film, `filmID` sẽ được gán bằng biến vừa định nghĩa là $filmID và `id` tương tự

// Viết query xong rồi, thì truyền biến trên javascript xuống graphql bằng cách dùng `variables` ở hàng số 4 của file này
export function getFilm(form: { filmID?: string; id?: string }) {
  return http
    .callGraphql({
      query: `query($filmID: ID, $id: ID){
        film(filmID: $filmID, id: $id) {
          created  
          director 
          edited  
          id  
        }
      }`,
      variables: {
        ...form,
      },
    })
    .then((resp) => {
      if (resp.data) return resp.data.data;
      return resp.data;
    })
    .catch((error) => {
      throw error;
    });
}

// 3. Muation có không truyền biến
// 4. Muation có có truyền biến
// => 2 cái này giống y hệt cách viết api 1 và 2, chỉ là khúc trong dấu ` ` thì thay chữ query thành chữ mutation (ở đây anh viết cái 4 cho tổng quát)

// 1. Ở đây BE định nghĩa `params` có kiểu `ThucTheVuTru!`

// form: any -> Đây là form viết trên javascript
// $form: ThucTheVuTru! -> Ta đặt biến tên là $form có kiểu ThucTheVuTru!
// params: $form -> gán $form cho params
// Các field mat_troi, ngoi_sao, mat_trang, trai_dat là một object trả về nếu call api thành công
// Và các field tương ứng của form chỗ gán `variables : { ... form }` là các field có trong `ThucTheVuTru!`
// Giống như ví dụ hình ở đây: https://ibb.co/svjgxNr
export function taoRaThucTheVuTru(form: any) {
  return http
    .callGraphql({
      query: `muation($form: ThucTheVuTru!){
      vutru(params: $form) {
        mat_troi  
        ngoi_sao 
        mat_trang
        trai_dat
      }
    }`,
      variables: {
        ...form,
      },
    })
    .then((resp) => {
      if (resp.data) return resp.data.data;
      return resp.data;
    })
    .catch((error) => {
      throw error;
    });
}

export default {
  getAllFilms,
  getFilm,
};

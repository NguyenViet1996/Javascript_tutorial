const users = [
  {
    id: 1,
    email: "doanhviet96@gmail.com",
    first_name: "viet",
    last_name: "nguyen",
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuBES1vUMjNBLuOVvxbMntf4PHCNVXzOefDw&usqp=CAU",
  },
  {
    id: 2,
    email: "nguyenvantai96@gmail.com",
    first_name: "hai",
    last_name: "tran",
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOX7Et3EQc2xSvXtN28_ysq8wg-9KOMblMcA&usqp=CAU",
  },
  {
    id: 3,
    email: "tranlengocsang96@gmail.com",
    first_name: "sang",
    last_name: "tran",
    avatar:
      "https://images-gmi-pmc.edge-generalmills.com/99d8ae9a-737f-491c-a7f7-34b014e5682c.jpg",
  },
  {
    id: 4,
    email: "nguyenhuucanh96@gmail.com",
    first_name: "canh",
    last_name: "nguyen",
    avatar:
      "https://dulichnhatrang123.com/wp-content/uploads/2021/11/1636530546_maxresdefault.jpg",
  },
  {
    id: 5,
    email: "tranthitrang96@gmail.com",
    first_name: "trang",
    last_name: "tran",
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqsgoc8-58l99iwLt_Pr85aXu8vevwhm7elA&usqp=CAU",
  },
  {
    id: 6,
    email: "lethihoang96@gmail.com",
    first_name: "hoang",
    last_name: "le",
    avatar:
      "https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/369030.jpg?resize=1200:*",
  },
];

// method : filter
const filterUser = users.filter((user) => {
  return user.first_name.includes("hoang") || user.first_name.includes("trang");
});
console.log("filterUser", filterUser);

// method : find
const findUser = users.find((user) => {
  return user.first_name.includes("hoang") || user.first_name.includes("trang");
});
console.log("findUser", findUser);

// method : map
const mapUser1 = users.map((user) => {
  return user.email;
});
console.log("mapUser1", mapUser1);

const mapUser2 = users.map((user) => {
  return { ...user, last_name: `${user.last_name} edited` };
});
console.log("mapUser2", mapUser2);

// method : reduce
const customUsers = users.reduce((acc, current) => {
  // accumulate = {}
  return { ...acc, [current.first_name]: current };
}, {});
console.log("customUsers", customUsers);
// console.log("array", Object.values(customUsers));

const arrayUsers = Object.values(customUsers).reduce((acc, current) => {
  return [...acc, current.email];
}, []);
console.log("arrayUsers", arrayUsers);

const listNumbers = [1, 2, 3, 4, 5, 6];
const total = listNumbers.reduce((acc, current) => {
  return acc + current;
}, 0);
console.log("total", total);

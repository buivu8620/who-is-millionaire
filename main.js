const questions = [
  {
    id: 1,
    question: "Giải Grand Slam đầu tiên trong năm là giải nào?",
    options: {
      a: "Austrlia mở rộng",
      b: "Wimbledon",
      c: "Roland Garos",
      d: "Mỹ mở rộng",
    },
    answer: "Austrlia mở rộng",
    score: 200000,
  },
  {
    id: 2,
    question:
      "Cùng với Hà Nội T&T (vô địch V-League 2010), CLB nào của Việt Nam tham dự AFC Cup 2011?",
    options: {
      a: "SHB Đà Nẵng",
      b: "Sông Lam Nghệ An",
      c: "Hoàng Anh Gia Lai",
      d: "Becamex Bình Dương",
    },
    answer: "Sông Lam Nghệ An",
    score: 400000,
  },
  {
    id: 3,
    question: "AFC Asian Cup 2011 được tổ chức tại quốc gia nào?",
    options: {
      a: "Nhật Bản",
      b: "Hàn Quốc",
      c: "Qatar",
      d: "Iraq",
    },
    answer: "Qatar",
    score: 600000,
  },
  {
    id: 4,
    question: "Đội nào lên ngôi vô địch AFC Asian Cup 2011 tổ chức tại Qatar?",
    options: {
      a: "Nhật Bản",
      b: "Australia",
      c: "Hàn Quốc",
      d: "Uzbekistan",
    },
    answer: "Nhật Bản",
    score: 1000000,
  },
  {
    id: 5,
    question:
      "Ai là nhạc sĩ Việt Nam đầu tiên viết opera với tác phẩm “Cô sao” và sau đó là “Người tạc tượng”?",
    options: {
      a: "Trọng Đài",
      b: "Trần Hoàn",
      c: "Hoàng Vân",
      d: "Đỗ Nhuận",
    },
    answer: "Đỗ Nhuận",
    score: 2000000,
    checkPoint: true,
  },
  {
    id: 6,
    question: "Sông Bến Hải và sông Thạch Hãn nằm ở tỉnh nào?",
    options: {
      a: "Nghệ An",
      b: "Quảng Ninh",
      c: "Quảng Trị",
      d: "Quảng Ngãi",
    },
    answer: "Quảng Trị",
    score: 3000000,
  },
  {
    id: 7,
    question: "Trong các cây cầu sau, cầu nào là cầu xoay?",
    options: {
      a: "Cầu Thanh Trì",
      b: "Cầu Sông Hàn",
      c: "Cầu Thị Nại",
      d: "Cầu Cần Thơ",
    },
    answer: "Cầu Sông Hàn",
    score: 6000000,
  },
  {
    id: 8,
    question: "Đại Ngu là quốc hiệu của triều đại nào?",
    options: {
      a: "Triều Ngô",
      b: "Các chúa Nguyễn",
      c: "Nhà Tây Sơn",
      d: "Triều Hồ",
    },
    answer: "Triều Hồ",
    score: 10000000,
  },
  {
    id: 9,
    question: "Các vua Hùng đặt quốc hiệu nước ta là gì?",
    options: {
      a: "Văn Lang",
      b: "Âu Lạc",
      c: "Vạn Xuân",
      d: "Đại Việt",
    },
    answer: "Văn Lang",
    score: 14000000,
  },
  {
    id: 10,
    question: "An Dương Vương đặt quốc hiệu nước ta là gì?",
    options: {
      a: "Đại Việt",
      b: "Đại Cồ Việt",
      c: "Vạn Xuân",
      d: "Âu Lạc",
    },
    answer: "Âu Lạc",
    score: 22000000,
    checkPoint: true,
  },
  {
    id: 11,
    question:
      "Năm 1010, Lý Thái Tổ đã cho xây dựng điện nào ở trung tâm hoàng thành Thăng Long?",
    options: {
      a: "Điện Càn Thành",
      b: "Điện Càn Chánh",
      c: "Điện Kính Thiên",
      d: "Điện Càn Nguyên",
    },
    answer: "Điện Kính Thiên",
    score: 30000000,
  },
  {
    id: 12,
    question: '"Điêu tàn" là tập thơ đầu tiên của nhà thơ nào?',
    options: {
      a: "Anh Thơ",
      b: "Thế Lữ",
      c: "Bích Khê",
      d: "Chế Lan Viên",
    },
    answer: "Chế Lan Viên",
    score: 40000000,
  },
  {
    id: 13,
    question:
      "Hội nghị chống biến đổi khí hậu lần thứ 17- 2011 được tổ chức tại nước nào?",
    options: {
      a: "Đan Mạch (2011)",
      b: "Mexico (2010)",
      c: "Nam Phi (2011)",
      d: "Quatar và Hàn Quốc (2012)",
    },
    answer: "Nam Phi (2011)",
    score: 60000000,
  },
  {
    id: 14,
    question:
      "Ai được bầu làm Tổng bí thư Đảng cộng sản Việt Nam tại Đại hội XI?",
    options: {
      a: "Nguyễn Phú Trọng",
      b: "Nguyễn Sinh Hùng",
      c: "Trương Tấn Sang",
      d: "Nguyễn Tấn Dũng",
    },
    answer: "Nguyễn Phú Trọng",
    score: 85000000,
  },
  {
    id: 15,
    question: "Tỉnh nào đăng cai tổ chức Năm du lịch Quốc gia 2012?",
    options: {
      a: "Thanh Hoá",
      b: "Lâm Đồng",
      c: "Hải Phòng",
      d: "Thừa Thiên Huế",
    },
    answer: "Thừa Thiên Huế",
    score: 150000000,
    checkPoint: true,
  },
];
let currentQuestion = 0;
let total = 0;
//render time
let countTime = 60;
let timeElement = document.querySelector(".time");
function timeLeft() {
  if (countTime > 0) {
    timeElement.innerText = countTime;
    countTime = countTime - 1;
  }
  if (countTime == 0) {
    timeElement.innerText = 0;
    setTimeout(function () {
      // alert(`Hết thời gian - Bạn nhận được ${total} vnđ`);
      alert(`Hết thời gian `);
    }, 500);
    currentQuestion = 0;
    total = 0;
    countTime = 60;
  }
}
// timeLeft();

let renderTime;

//start/exit
const exitBtn = document.querySelector(".exit__btn");
const startBtn = document.querySelector(".start__btn");
function start() {
  document.querySelector(".app").style.display = "block";
  document.querySelector(".start").style.display = "none";

  renderTime = setInterval(timeLeft, 1000);
}
function exit() {
  const isExit = confirm("Bạn muốn thoát trò chơi không?");
  if (isExit == true) {
    document.querySelector(".app").style.display = "none";
    document.querySelector(".start").style.display = "block";
    currentQuestion = 0;
    countTime = 60;
    timeElement.innerText = countTime;
    clearInterval(renderTime);
  }
}
exitBtn.addEventListener("click", exit);
startBtn.addEventListener("click", start);
//
//render question
let questionNumberElement = document.querySelector(".question__number");
let questionBonusElement = document.querySelector(".question__bonus");
let questionContentElement = document.querySelector(".question__content");

let aAnswerElement = document.querySelector("#a");
let bAnswerElement = document.querySelector("#b");
let cAnswerElement = document.querySelector("#c");
let dAnswerElement = document.querySelector("#d");
let answerElements = document.querySelectorAll(".answer__btn");

//render question
function renderQuestion(currentQuestion) {
  questionNumberElement.innerText = "Câu " + questions[currentQuestion].id;
  questionBonusElement.innerText =
    "Thưởng: " + questions[currentQuestion].score + "vnđ";
  questionContentElement.innerText = questions[currentQuestion].question;
  aAnswerElement.innerText = questions[currentQuestion].options.a;
  bAnswerElement.innerText = questions[currentQuestion].options.b;
  cAnswerElement.innerText = questions[currentQuestion].options.c;
  dAnswerElement.innerText = questions[currentQuestion].options.d;
}
renderQuestion(currentQuestion);
//check answer
for (let i = 0; i < answerElements.length; i++) {
  answerElements[i].addEventListener("click", function () {
    if (currentQuestion == 14) {
      if (answerElements[i].textContent == questions[14].answer) {
        alert("You win - Bạn nhận được 424.200.000 vnđ");
        total = 0;
        currentQuestion = 0;
      } else {
        alert("Tiền bạn nhận được: " + total + " vnđ");
        total = 0;
        currentQuestion = 0;
      }
    } else {
      if (answerElements[i].textContent == questions[currentQuestion].answer) {
        total += questions[currentQuestion].score;
        currentQuestion += 1;
        countTime = 60;
      } else {
        if (currentQuestion > 9) {
          alert("Tiền bạn nhận được: " + total + " vnđ");
          total = 0;
          currentQuestion = 0;
        } else if (currentQuestion > 4) {
          alert("Tiền bạn nhận được: " + total + " vnđ");
          total = 0;
          currentQuestion = 0;
        } else {
          alert("Trả lời sai! ");
          currentQuestion = 0;
          total = 0;
        }
      }
    }

    document.querySelector(".total-money").innerText =
      "Tổng: " + total + " vnđ";
    renderQuestion(currentQuestion);
  });
}

$(document).ready(function () {
  $("a.scrollto").click (function() {
    var elementClick = $(this).attr("href")
    var destination = $(elementClick).offset().top;
    jQuery("html:not(:animated),body:not(:animated)").animate({
    scrollTop: destination
  }, 1000);
  return false;
  });
});

  // read_more
function read_more() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("btn-read");
  
  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Посмотреть больше";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Свернуть";
    moreText.style.display = "flex";
  }
}

function read_more_second() {
  var dots = document.getElementById("dots-more");
  var moreText = document.getElementById("more-second");
  var btnText = document.getElementById("btn-read-second");
  
  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Посмотреть больше";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Свернуть";
    moreText.style.display = "flex";
  }
}

$(function() {
  // при нажатии на кнопку scrollup
   $('.scrollup').click(function() {
    // переместиться в верхнюю часть страницы
    $("html, body").animate({
      scrollTop:0
    },1000);
  })
})
// при прокрутке окна (window)
$(window).scroll(function() {
  // если пользователь прокрутил страницу более чем на 200px
  if ($(this).scrollTop()>200) {
    // то сделать кнопку scrollup видимой
    $('.scrollup').fadeIn();
  }
  // иначе скрыть кнопку scrollup
  else {
    $('.scrollup').fadeOut();
  }
});

// Comments button
Vue.component('comment', {

	props: ['comment', 'submitted'],

	template: `
	<div v-if='submitted' class="card">
		
		<div class="d-flex card-body">
		
			<div class="col-10 d-flex flex-column">
				<div class="card-title">
					<h5 class="font-weight-bold">{{ comment.name }}</h5>
				</div>
				<div class="card-text">
					<p>{{ comment.description }}</p>
				</div>
			    <button class="btn btn-outline-primary ml-auto mt-auto">Удалить комментарий</button>
			</div>
		</div>
		
	</div>`,

	data() {
		return {

		}
	},
	methods: {

	}
})

new Vue({
	el: '#app',
	data: {
		isFormOpen: false,
		submitted: false,
		comments: [],
		comment: {
			name: '',
			description: ''
		}
	},
	methods: {
		toggleForm: function() {
			this.isFormOpen = !this.isFormOpen
		},
		submitForm: function() {
			this.isFormOpen = !this.isFormOpen;
			this.submitted = true
			this.comments.push(this.comment);
		}
	}
});



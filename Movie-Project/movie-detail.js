// TMDB 이미지 주소 기본 경로
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

// URL에서 ID 추출
const urlParams = new URLSearchParams(window.location.search);
const movieId = urlParams.get("id");

// movie-data-js에 있는 영화 목록에서 해당 영화 찾기
const movie = movieList.results.find((m) => m.id == movieId);

// 영화 정보 렌더링
if (movie) {
  document.getElementById("movieTitle").textContent = movie.title || "제목 없음";
  document.getElementById("moviePoster").src = IMAGE_BASE_URL + movie.poster_path;
  document.getElementById("moviePoster").alt = movie.title;

  document.getElementById("movieAdult").textContent = movie.adult ? "성인용" : "전체 이용가";
  document.getElementById("movieGenre").textContent = movie.genre_ids ? movie.genre_ids.join(", ") : "-";
  document.getElementById("movieId").textContent = movie.id;
  document.getElementById("movieLanguage").textContent = movie.original_language || "-";
  document.getElementById("movieOverview").textContent = movie.overview || "줄거리 정보 없음";
  document.getElementById("movieDate").textContent = movie.release_date || "-";
  document.getElementById("movieVideo").textContent = movie.video ? "예" : "아니오";
  document.getElementById("movieAverage").textContent = movie.vote_average || "-";
  document.getElementById("movieVote").textContent = movie.vote_count || "-";
} else {
  // 영화 정보를 찾을 수 없을 때
  const detailSection = document.querySelector(".container-lg");
  detailSection.innerHTML = `
    <div class="text-center mt-5">
      <h3 class="text-danger">❌ 해당 영화 정보를 찾을 수 없습니다.</h3>
      <a href="movie-home.html" class="btn btn-warning mt-3">← 검색 화면으로 돌아가기</a>
    </div>
  `;
}

const genreMap = {
  28: "Action",
  12: "Adventure",
  16: "Animation",
  35: "Comedy",
  80: "Crime",
  18: "Drama",
  10751: "Family",
  14: "Fantasy",
  27: "Horror",
  10749: "Romance",
  878: "Sci-Fi",
  53: "Thriller"
};

const genreNames = (movie.genre_ids || [])
  .map(id => genreMap[id] || id)
  .join(", ");

document.getElementById("movieGenre").textContent = genreNames || "-";


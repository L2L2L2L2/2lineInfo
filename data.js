// [장소 데이터] 총 100건
const placeData = {
    "111ES001": {
        "station": "1호선 테스트역",
        "title": "테스트역 에스컬레이터 1호기",
        "phone": "032-451-4311",
        "image_name": "211.jpg",
        "x_percent": 78.75,
        "y_percent": 68.03,
        "marker_type": "beacon",
        "marker_color": "red"
    },
    "762ES001": {
        "station": "7호선 테스트역",
        "title": "7호선 테스트역 에스컬레이터 1호기",
        "phone": "032-451-4311",
        "image_name": "211.jpg",
        "x_percent": 78.75,
        "y_percent": 68.03,
        "marker_type": "beacon",
        "marker_color": "red"
    },
    "211ES001": {
        "station": "가정역",
        "title": "가정역 에스컬레이터 1호기",
        "phone": "032-451-4311",
        "image_name": "211.jpg",
        "x_percent": 78.75,
        "y_percent": 68.03,
        "marker_type": "beacon",
        "marker_color": "red"
    },
    "211ES002": {
        "station": "가정역",
        "title": "가정역 에스컬레이터 2호기",
        "phone": "032-451-4311",
        "image_name": "211.jpg",
        "x_percent": 72.7,
        "y_percent": 87.49,
        "marker_type": "beacon",
        "marker_color": "red"
    },
    "211ES003": {
        "station": "가정역",
        "title": "가정역 에스컬레이터 3호기",
        "phone": "032-451-4311",
        "image_name": "211.jpg",
        "x_percent": 46.8,
        "y_percent": 75.41,
        "marker_type": "beacon",
        "marker_color": "red"
    },
    "211ES004": {
        "station": "가정역",
        "title": "가정역 에스컬레이터 4호기",
        "phone": "032-451-4311",
        "image_name": "211.jpg",
        "x_percent": 55.73,
        "y_percent": 92.09,
        "marker_type": "beacon",
        "marker_color": "red"
    },
    "211ES005": {
        "station": "가정역",
        "title": "가정역 에스컬레이터 5호기",
        "phone": "032-451-4311",
        "image_name": "211.jpg",
        "x_percent": 42.9,
        "y_percent": 71.12,
        "marker_type": "beacon",
        "marker_color": "red"
    },
    "211ES006": {
        "station": "가정역",
        "title": "가정역 에스컬레이터 6호기",
        "phone": "032-451-4311",
        "image_name": "211.jpg",
        "x_percent": 50.21,
        "y_percent": 87.28,
        "marker_type": "beacon",
        "marker_color": "red"
    },
    "211ES007": {
        "station": "가정역",
        "title": "가정역 에스컬레이터 7호기",
        "phone": "032-451-4311",
        "image_name": "211.jpg",
        "x_percent": 76.23,
        "y_percent": 63.84,
        "marker_type": "beacon",
        "marker_color": "red"
    },
    "211ES008": {
        "station": "가정역",
        "title": "가정역 에스컬레이터 8호기",
        "phone": "032-451-4311",
        "image_name": "211.jpg",
        "x_percent": 66.84,
        "y_percent": 83.54,
        "marker_type": "beacon",
        "marker_color": "red"
    },
    "211ES009": {
        "station": "가정역",
        "title": "가정역 에스컬레이터 9호기",
        "phone": "032-451-4311",
        "image_name": "211.jpg",
        "x_percent": 78.4,
        "y_percent": 66.31,
        "marker_type": "beacon",
        "marker_color": "red"
    },
    "211ES010": {
        "station": "가정역",
        "title": "가정역 에스컬레이터 10호기",
        "phone": "032-451-4311",
        "image_name": "211.jpg",
        "x_percent": 66.38,
        "y_percent": 55.07,
        "marker_type": "beacon",
        "marker_color": "red"
    },
    "211ES011": {
        "station": "가정역",
        "title": "가정역 에스컬레이터 11호기",
        "phone": "032-451-4311",
        "image_name": "211.jpg",
        "x_percent": 44.25,
        "y_percent": 72.73,
        "marker_type": "beacon",
        "marker_color": "red"
    },
    "211ES012": {
        "station": "가정역",
        "title": "가정역 에스컬레이터 12호기",
        "phone": "032-451-4311",
        "image_name": "211.jpg",
        "x_percent": 55.63,
        "y_percent": 56.35,
        "marker_type": "beacon",
        "marker_color": "red"
    },
    "211ES013": {
        "station": "가정역",
        "title": "가정역 에스컬레이터 13호기",
        "phone": "032-451-4311",
        "image_name": "211.jpg",
        "x_percent": 68.01,
        "y_percent": 56.67,
        "marker_type": "beacon",
        "marker_color": "red"
    },
    "211ES014": {
        "station": "가정역",
        "title": "가정역 에스컬레이터 14호기",
        "phone": "032-451-4311",
        "image_name": "211.jpg",
        "x_percent": 75.78,
        "y_percent": 42.01,
        "marker_type": "beacon",
        "marker_color": "red"
    },
    "211ES015": {
        "station": "가정역",
        "title": "가정역 에스컬레이터 15호기",
        "phone": "032-451-4311",
        "image_name": "211.jpg",
        "x_percent": 55.45,
        "y_percent": 56.67,
        "marker_type": "beacon",
        "marker_color": "red"
    },
    "211ES016": {
        "station": "가정역",
        "title": "가정역 에스컬레이터 16호기",
        "phone": "032-451-4311",
        "image_name": "211.jpg",
        "x_percent": 46.87,
        "y_percent": 43.3,
        "marker_type": "beacon",
        "marker_color": "red"
    },
    "211ES017": {
        "station": "가정역",
        "title": "가정역 에스컬레이터 17호기",
        "phone": "032-451-4311",
        "image_name": "211.jpg",
        "x_percent": 30.7,
        "y_percent": 30.67,
        "marker_type": "beacon",
        "marker_color": "red"
    },
    "211ES018": {
        "station": "가정역",
        "title": "가정역 에스컬레이터 18호기",
        "phone": "032-451-4311",
        "image_name": "211.jpg",
        "x_percent": 30.16,
        "y_percent": 30.67,
        "marker_type": "beacon",
        "marker_color": "red"
    },
    "211EL001": {
        "station": "가정역",
        "title": "가정역 엘리베이터 1호기(B1)",
        "phone": "032-451-4311",
        "image_name": "211.jpg",
        "x_percent": 73.7,
        "y_percent": 43.62,
        "marker_type": "beacon",
        "marker_color": "red"
    },
    "211EL002": {
        "station": "가정역",
        "title": "가정역 엘리베이터 2호기(B1)",
        "phone": "032-451-4311",
        "image_name": "211.jpg",
        "x_percent": 56.45,
        "y_percent": 46.51,
        "marker_type": "beacon",
        "marker_color": "red"
    },
    "211EL003": {
        "station": "가정역",
        "title": "가정역 엘리베이터 3호기(B1)",
        "phone": "032-451-4311",
        "image_name": "211.jpg",
        "x_percent": 47.5,
        "y_percent": 40.73,
        "marker_type": "beacon",
        "marker_color": "red"
    },
    "211EL004": {
        "station": "가정역",
        "title": "가정역 엘리베이터 4호기(B1)",
        "phone": "032-451-4311",
        "image_name": "211.jpg",
        "x_percent": 65.3,
        "y_percent": 38.48,
        "marker_type": "beacon",
        "marker_color": "red"
    },
    "211EL005": {
        "station": "가정역",
        "title": "가정역 엘리베이터 5호기",
        "phone": "032-451-4311",
        "image_name": "211.jpg",
        "x_percent": 65.75,
        "y_percent": 33.24,
        "marker_type": "beacon",
        "marker_color": "red"
    },
    "211EL006": {
        "station": "가정역",
        "title": "가정역 엘리베이터 6호기",
        "phone": "032-451-4311",
        "image_name": "211.jpg",
        "x_percent": 50.67,
        "y_percent": 52.93,
        "marker_type": "beacon",
        "marker_color": "red"
    },
    "211EL007": {
        "station": "가정역",
        "title": "가정역 엘리베이터 1호기(B3)",
        "phone": "032-451-4311",
        "image_name": "211.jpg",
        "x_percent": 69.46,
        "y_percent": 87.92,
        "marker_type": "beacon",
        "marker_color": "red"
    },
    "211EL008": {
        "station": "가정역",
        "title": "가정역 엘리베이터 2호기(B3)",
        "phone": "032-451-4311",
        "image_name": "211.jpg",
        "x_percent": 57.62,
        "y_percent": 91.46,
        "marker_type": "beacon",
        "marker_color": "red"
    },
    "211EL009": {
        "station": "가정역",
        "title": "가정역 엘리베이터 3호기(B3)",
        "phone": "032-451-4311",
        "image_name": "211.jpg",
        "x_percent": 53.2,
        "y_percent": 86.1,
        "marker_type": "beacon",
        "marker_color": "red"
    },
    "211EL010": {
        "station": "가정역",
        "title": "가정역 엘리베이터 4호기(B3)",
        "phone": "032-451-4311",
        "image_name": "211.jpg",
        "x_percent": 64.58,
        "y_percent": 84.18,
        "marker_type": "beacon",
        "marker_color": "red"
    },
    "211EXIT001": {
        "station": "가정역",
        "title": "가정역 1번출구",
        "phone": "032-451-4311",
        "image_name": "211.jpg",
        "x_percent": 89.33,
        "y_percent": 49.18,
        "marker_type": "beacon",
        "marker_color": "red"
    },
    "211EXIT002": {
        "station": "가정역",
        "title": "가정역 2번출구",
        "phone": "032-451-4311",
        "image_name": "211.jpg",
        "x_percent": 57.8,
        "y_percent": 53.25,
        "marker_type": "beacon",
        "marker_color": "red"
    },
    "211EXIT003": {
        "station": "가정역",
        "title": "가정역 3번출구",
        "phone": "032-451-4311",
        "image_name": "211.jpg",
        "x_percent": 46.6,
        "y_percent": 54,
        "marker_type": "beacon",
        "marker_color": "red"
    },
    "211EXIT004": {
        "station": "가정역",
        "title": "가정역 4번출구",
        "phone": "032-451-4311",
        "image_name": "211.jpg",
        "x_percent": 32.33,
        "y_percent": 39.55,
        "marker_type": "beacon",
        "marker_color": "red"
    },
    "211EXIT005": {
        "station": "가정역",
        "title": "가정역 5번출구",
        "phone": "032-451-4311",
        "image_name": "211.jpg",
        "x_percent": 29.8,
        "y_percent": 30.67,
        "marker_type": "beacon",
        "marker_color": "red"
    },
    "211EXIT006": {
        "station": "가정역",
        "title": "가정역 6번출구",
        "phone": "032-451-4311",
        "image_name": "211.jpg",
        "x_percent": 54.1,
        "y_percent": 27.46,
        "marker_type": "beacon",
        "marker_color": "red"
    },
    "211EXIT007": {
        "station": "가정역",
        "title": "가정역 7번출구",
        "phone": "032-451-4311",
        "image_name": "211.jpg",
        "x_percent": 70.72,
        "y_percent": 33.88,
        "marker_type": "beacon",
        "marker_color": "red"
    },
    "211EXIT008": {
        "station": "가정역",
        "title": "가정역 8번출구",
        "phone": "032-451-4311",
        "image_name": "211.jpg",
        "x_percent": 91.32,
        "y_percent": 45.65,
        "marker_type": "beacon",
        "marker_color": "red"
    },
    "211TOILET6M": {
        "station": "가정역",
        "title": "가정역 6번출구 방면 남자화장실",
        "phone": "032-451-4311",
        "image_name": "211.jpg",
        "x_percent": 60.42,
        "y_percent": 35.59,
        "marker_type": "beacon",
        "marker_color": "red"
    },
    "211TOILET6W": {
        "station": "가정역",
        "title": "가정역 6번출구 방면 여자화장실",
        "phone": "032-451-4311",
        "image_name": "211.jpg",
        "x_percent": 60.42,
        "y_percent": 35.48,
        "marker_type": "beacon",
        "marker_color": "red"
    },
    "211TOILET5M": {
        "station": "가정역",
        "title": "가정역 5번출구 방면 남자화장실",
        "phone": "032-451-4311",
        "image_name": "211.jpg",
        "x_percent": 45.7,
        "y_percent": 37.09,
        "marker_type": "beacon",
        "marker_color": "red"
    },
    "211TOILET5W": {
        "station": "가정역",
        "title": "가정역 5번출구 방면 여자화장실",
        "phone": "032-451-4311",
        "image_name": "211.jpg",
        "x_percent": 43.62,
        "y_percent": 35.48,
        "marker_type": "beacon",
        "marker_color": "red"
    },
    "211UPFRONT": {
        "station": "가정역",
        "title": "가정역 상선 전부(검단오류 방면)",
        "phone": "032-451-4311",
        "image_name": "211.jpg",
        "x_percent": 80.39,
        "y_percent": 86.21,
        "marker_type": "beacon",
        "marker_color": "red"
    },
    "211UPMID": {
        "station": "가정역",
        "title": "가정역 상선 중앙(검단오류 방면)",
        "phone": "032-451-4311",
        "image_name": "211.jpg",
        "x_percent": 64.04,
        "y_percent": 90.71,
        "marker_type": "beacon",
        "marker_color": "red"
    },
    "211UPREAR": {
        "station": "가정역",
        "title": "가정역 상선 후부(검단오류 방면)",
        "phone": "032-451-4311",
        "image_name": "211.jpg",
        "x_percent": 45.25,
        "y_percent": 94.45,
        "marker_type": "beacon",
        "marker_color": "red"
    },
    "211DOWNFRONT": {
        "station": "가정역",
        "title": "가정역 하선 전방(운연 방면)",
        "phone": "032-451-4311",
        "image_name": "211.jpg",
        "x_percent": 43.8,
        "y_percent": 89.64,
        "marker_type": "beacon",
        "marker_color": "red"
    },
    "211DOWNMID": {
        "station": "가정역",
        "title": "가정역 하선 중앙(운연 방면)",
        "phone": "032-451-4311",
        "image_name": "211.jpg",
        "x_percent": 61.87,
        "y_percent": 85.25,
        "marker_type": "beacon",
        "marker_color": "red"
    },
    "211DOWNREAR": {
        "station": "가정역",
        "title": "가정역 하선 후부(운연 방면)",
        "phone": "032-451-4311",
        "image_name": "211.jpg",
        "x_percent": 77.95,
        "y_percent": 81.82,
        "marker_type": "beacon",
        "marker_color": "red"
    },
    "211STA001": {
        "station": "가정역",
        "title": "가정역 대합실(1, 6, 7, 8번 출구 방면)",
        "phone": "032-451-4311",
        "image_name": "211.jpg",
        "x_percent": 65.57,
        "y_percent": 34.74,
        "marker_type": "beacon",
        "marker_color": "red"
    },
    "211STA002": {
        "station": "가정역",
        "title": "가정역 대합실(2, 3, 4, 5번 출구 방면)",
        "phone": "032-451-4311",
        "image_name": "211.jpg",
        "x_percent": 41.09,
        "y_percent": 37.09,
        "marker_type": "beacon",
        "marker_color": "red"
    },
     "209ES001": {
        "station": "아시아드경기장역",
        "title": "아시아드경기장역 에스컬레이터 1호기",
        "phone": "032-451-4309",
        "image_name": "209.jpg",
        "x_percent": 52.75,
        "y_percent": 43.54,
        "marker_type": "beacon",
        "marker_color": "red"
    },
    "209ES002": {
        "station": "아시아드경기장역",
        "title": "아시아드경기장역 에스컬레이터 2호기",
        "phone": "032-451-4309",
        "image_name": "209.jpg",
        "x_percent": 69.26,
        "y_percent": 73.91,
        "marker_type": "beacon",
        "marker_color": "red"
    },
    "209ES003": {
        "station": "아시아드경기장역",
        "title": "아시아드경기장역 에스컬레이터 3호기",
        "phone": "032-451-4309",
        "image_name": "209.jpg",
        "x_percent": 59.06,
        "y_percent": 51.6,
        "marker_type": "beacon",
        "marker_color": "red"
    },
    "209ES004": {
        "station": "아시아드경기장역",
        "title": "아시아드경기장역 에스컬레이터 4호기",
        "phone": "032-451-4309",
        "image_name": "209.jpg",
        "x_percent": 70.34,
        "y_percent": 80.83,
        "marker_type": "beacon",
        "marker_color": "red"
    },
    "209ES005": {
        "station": "아시아드경기장역",
        "title": "아시아드경기장역 에스컬레이터 5호기",
        "phone": "032-451-4309",
        "image_name": "209.jpg",
        "x_percent": 24.93,
        "y_percent": 45,
        "marker_type": "beacon",
        "marker_color": "red"
    },
    "209ES006": {
        "station": "아시아드경기장역",
        "title": "아시아드경기장역 에스컬레이터 6호기",
        "phone": "032-451-4309",
        "image_name": "209.jpg",
        "x_percent": 25.11,
        "y_percent": 44.53,
        "marker_type": "beacon",
        "marker_color": "red"
    },
    "209ES007": {
        "station": "아시아드경기장역",
        "title": "아시아드경기장역 에스컬레이터 7호기",
        "phone": "032-451-4309",
        "image_name": "209.jpg",
        "x_percent": 30.62,
        "y_percent": 62.76,
        "marker_type": "beacon",
        "marker_color": "red"
    },
    "209ES008": {
        "station": "아시아드경기장역",
        "title": "아시아드경기장역 에스컬레이터 8호기",
        "phone": "032-451-4309",
        "image_name": "209.jpg",
        "x_percent": 30.35,
        "y_percent": 62.29,
        "marker_type": "beacon",
        "marker_color": "red"
    },
    "209TOILET4M": {
        "station": "아시아드경기장역",
        "title": "아시아드경기장역 4번 출구 방면 남자화장실",
        "phone": "032-451-4309",
        "image_name": "209.jpg",
        "x_percent": 52.65,
        "y_percent": 61.97,
        "marker_type": "beacon",
        "marker_color": "red"
    },
    "209TOILET4W": {
        "station": "아시아드경기장역",
        "title": "아시아드경기장역 4번 출구 방면 여자화장실",
        "phone": "032-451-4309",
        "image_name": "209.jpg",
        "x_percent": 55,
        "y_percent": 66.37,
        "marker_type": "beacon",
        "marker_color": "red"
    },
    "209EL001": {
        "station": "아시아드경기장역",
        "title": "아시아드경기장역 엘리베이터 1호기(상선승강장)",
        "phone": "032-451-4309",
        "image_name": "209.jpg",
        "x_percent": 51.11,
        "y_percent": 75.17,
        "marker_type": "beacon",
        "marker_color": "red"
    },
    "209EL002": {
        "station": "아시아드경기장역",
        "title": "아시아드경기장역 엘리베이터 2호기(하선승강장)",
        "phone": "032-451-4309",
        "image_name": "209.jpg",
        "x_percent": 54.54,
        "y_percent": 84.13,
        "marker_type": "beacon",
        "marker_color": "red"
    },
    "209EL003": {
        "station": "아시아드경기장역",
        "title": "아시아드경기장역 엘리베이터 3호기(1, 2번 출구)",
        "phone": "032-451-4309",
        "image_name": "209.jpg",
        "x_percent": 37.75,
        "y_percent": 41.39,
        "marker_type": "beacon",
        "marker_color": "red"
    },
    "209EL004": {
        "station": "아시아드경기장역",
        "title": "아시아드경기장역 엘리베이터 4호기(3, 4번 출구)",
        "phone": "032-451-4309",
        "image_name": "209.jpg",
        "x_percent": 45.97,
        "y_percent": 63.07,
        "marker_type": "beacon",
        "marker_color": "red"
    },
    "209EXIT001": {
        "station": "아시아드경기장역",
        "title": "아시아드경기장역 1번 출구",
        "phone": "032-451-4309",
        "image_name": "209.jpg",
        "x_percent": 24.75,
        "y_percent": 44.53,
        "marker_type": "beacon",
        "marker_color": "red"
    },
    "209EXIT002": {
        "station": "아시아드경기장역",
        "title": "아시아드경기장역 2번 출구",
        "phone": "032-451-4309",
        "image_name": "209.jpg",
        "x_percent": 39.29,
        "y_percent": 42.81,
        "marker_type": "beacon",
        "marker_color": "red"
    },
    "209EXIT003": {
        "station": "아시아드경기장역",
        "title": "아시아드경기장역 3번 출구",
        "phone": "032-451-4309",
        "image_name": "209.jpg",
        "x_percent": 45.43,
        "y_percent": 59.77,
        "marker_type": "beacon",
        "marker_color": "red"
    },
    "209EXIT004": {
        "station": "아시아드경기장역",
        "title": "아시아드경기장역 4번 출구",
        "phone": "032-451-4309",
        "image_name": "209.jpg",
        "x_percent": 30.35,
        "y_percent": 62.13,
        "marker_type": "beacon",
        "marker_color": "red"
    },
     "212ES001": {
        "station": "가정중앙시장역",
        "title": "가정중앙시장역 에스컬레이터 1호기",
        "phone": "032-451-4312",
        "image_name": "212.jpg",
        "x_percent": 41.92,
        "y_percent": 40.8,
        "marker_type": "beacon",
        "marker_color": "red"
    },
    "212ES002": {
        "station": "가정중앙시장역",
        "title": "가정중앙시장역 에스컬레이터 2호기",
        "phone": "032-451-4312",
        "image_name": "212.jpg",
        "x_percent": 54.81,
        "y_percent": 71.66,
        "marker_type": "beacon",
        "marker_color": "red"
    },
    "212ES003": {
        "station": "가정중앙시장역",
        "title": "가정중앙시장역 에스컬레이터 3호기",
        "phone": "032-451-4312",
        "image_name": "212.jpg",
        "x_percent": 37.7,
        "y_percent": 46.74,
        "marker_type": "beacon",
        "marker_color": "red"
    },
    "212ES004": {
        "station": "가정중앙시장역",
        "title": "가정중앙시장역 에스컬레이터 4호기",
        "phone": "032-451-4312",
        "image_name": "212.jpg",
        "x_percent": 51.22,
        "y_percent": 78.1,
        "marker_type": "beacon",
        "marker_color": "red"
    },
    "212ES005": {
        "station": "가정중앙시장역",
        "title": "가정중앙시장역 에스컬레이터 5호기",
        "phone": "032-451-4312",
        "image_name": "212.jpg",
        "x_percent": 32.31,
        "y_percent": 33.37,
        "marker_type": "beacon",
        "marker_color": "red"
    },
    "212ES006": {
        "station": "가정중앙시장역",
        "title": "가정중앙시장역 에스컬레이터 6호기",
        "phone": "032-451-4312",
        "image_name": "212.jpg",
        "x_percent": 32.31,
        "y_percent": 32.55,
        "marker_type": "beacon",
        "marker_color": "red"
    },
    "212EL001": {
        "station": "가정중앙시장역",
        "title": "가정중앙시장역 엘리베이터 1호기",
        "phone": "032-451-4312",
        "image_name": "212.jpg",
        "x_percent": 40.87,
        "y_percent": 67.04,
        "marker_type": "beacon",
        "marker_color": "red"
    },
    "212EL002": {
        "station": "가정중앙시장역",
        "title": "가정중앙시장역 엘리베이터 2호기",
        "phone": "032-451-4312",
        "image_name": "212.jpg",
        "x_percent": 37.49,
        "y_percent": 73.81,
        "marker_type": "beacon",
        "marker_color": "red"
    },
    "212EL003": {
        "station": "가정중앙시장역",
        "title": "가정중앙시장역 엘리베이터 3호기",
        "phone": "032-451-4312",
        "image_name": "212.jpg",
        "x_percent": 27.13,
        "y_percent": 32.55,
        "marker_type": "beacon",
        "marker_color": "red"
    },
    "212EL004": {
        "station": "가정중앙시장역",
        "title": "가정중앙시장역 엘리베이터 4호기",
        "phone": "032-451-4312",
        "image_name": "212.jpg",
        "x_percent": 14.98,
        "y_percent": 43.93,
        "marker_type": "beacon",
        "marker_color": "red"
    },
    "212EL005": {
        "station": "가정중앙시장역",
        "title": "가정중앙시장역 엘리베이터 5호기",
        "phone": "032-451-4312",
        "image_name": "212.jpg",
        "x_percent": 18.78,
        "y_percent": 44.92,
        "marker_type": "beacon",
        "marker_color": "red"
    },
    "212TOILET1M": {
        "station": "가정중앙시장역",
        "title": "가정중앙시장역 남자화장실",
        "phone": "032-451-4312",
        "image_name": "212.jpg",
        "x_percent": 24.38,
        "y_percent": 34.03,
        "marker_type": "beacon",
        "marker_color": "red"
    },
    "212TOILET1W": {
        "station": "가정중앙시장역",
        "title": "가정중앙시장역 여자화장실",
        "phone": "032-451-4312",
        "image_name": "212.jpg",
        "x_percent": 26.6,
        "y_percent": 31.56,
        "marker_type": "beacon",
        "marker_color": "red"
    },
    "212EXIT001": {
        "station": "가정중앙시장역",
        "title": "가정중앙시장역 1번 출구",
        "phone": "032-451-4312",
        "image_name": "212.jpg",
        "x_percent": 32.31,
        "y_percent": 32.38,
        "marker_type": "beacon",
        "marker_color": "red"
    },
    "212EXIT002": {
        "station": "가정중앙시장역",
        "title": "가정중앙시장역 2번 출구",
        "phone": "032-451-4312",
        "image_name": "212.jpg",
        "x_percent": 21.21,
        "y_percent": 46.08,
        "marker_type": "beacon",
        "marker_color": "red"
    },
    "210EXIT001": {
        "station": "서해구청역",
        "title": "서해구청역 1번 출구",
        "phone": "032-451-4310",
        "image_name": "210.jpg",
        "x_percent": 41.02,
        "y_percent": 47.93,
        "marker_type": "beacon",
        "marker_color": "red"
    },
    "210EXIT002": {
        "station": "서해구청역",
        "title": "서해구청역 2번 출구",
        "phone": "032-451-4310",
        "image_name": "210.jpg",
        "x_percent": 31,
        "y_percent": 44.75,
        "marker_type": "beacon",
        "marker_color": "red"
    },
    "210EXIT003": {
        "station": "서해구청역",
        "title": "서해구청역 3번 출구",
        "phone": "032-451-4310",
        "image_name": "210.jpg",
        "x_percent": 28.47,
        "y_percent": 31.23,
        "marker_type": "beacon",
        "marker_color": "red"
    },
    "210EXIT004": {
        "station": "서해구청역",
        "title": "서해구청역 4번 출구",
        "phone": "032-451-4310",
        "image_name": "210.jpg",
        "x_percent": 50.95,
        "y_percent": 31.92,
        "marker_type": "beacon",
        "marker_color": "red"
    },
    "210TOILET001": {
        "station": "서해구청역",
        "title": "서해구청역 화장실",
        "phone": "032-451-4310",
        "image_name": "210.jpg",
        "x_percent": 29.47,
        "y_percent": 36.88,
        "marker_type": "beacon",
        "marker_color": "red"
    },
    "210ES001": {
        "station": "서해구청역",
        "title": "서해구청역 에스컬레이터 1호기",
        "phone": "032-451-4310",
        "image_name": "210.jpg",
        "x_percent": 59.7,
        "y_percent": 66.14,
        "marker_type": "beacon",
        "marker_color": "red"
    },
    "210ES002": {
        "station": "서해구청역",
        "title": "서해구청역 에스컬레이터 2호기",
        "phone": "032-451-4310",
        "image_name": "210.jpg",
        "x_percent": 68.64,
        "y_percent": 86.16,
        "marker_type": "beacon",
        "marker_color": "red"
    },
    "210ES003": {
        "station": "서해구청역",
        "title": "서해구청역 에스컬레이터 3호기",
        "phone": "032-451-4310",
        "image_name": "210.jpg",
        "x_percent": 62.05,
        "y_percent": 56.76,
        "marker_type": "beacon",
        "marker_color": "red"
    },
    "210ES004": {
        "station": "서해구청역",
        "title": "서해구청역 에스컬레이터 4호기",
        "phone": "032-451-4310",
        "image_name": "210.jpg",
        "x_percent": 71.25,
        "y_percent": 76.22,
        "marker_type": "beacon",
        "marker_color": "red"
    },
    "210ES005": {
        "station": "서해구청역",
        "title": "서해구청역 에스컬레이터 5호기",
        "phone": "032-451-4310",
        "image_name": "210.jpg",
        "x_percent": 57.99,
        "y_percent": 59.38,
        "marker_type": "beacon",
        "marker_color": "red"
    },
    "210ES006": {
        "station": "서해구청역",
        "title": "서해구청역 에스컬레이터 6호기",
        "phone": "032-451-4310",
        "image_name": "210.jpg",
        "x_percent": 46.53,
        "y_percent": 37.85,
        "marker_type": "beacon",
        "marker_color": "red"
    },
    "210ES007": {
        "station": "서해구청역",
        "title": "서해구청역 에스컬레이터 7호기",
        "phone": "032-451-4310",
        "image_name": "210.jpg",
        "x_percent": 41.38,
        "y_percent": 47.65,
        "marker_type": "beacon",
        "marker_color": "red"
    },
    "210ES008": {
        "station": "서해구청역",
        "title": "서해구청역 에스컬레이터 8호기",
        "phone": "032-451-4310",
        "image_name": "210.jpg",
        "x_percent": 41.38,
        "y_percent": 47.24,
        "marker_type": "beacon",
        "marker_color": "red"
    },
    "210ES009": {
        "station": "서해구청역",
        "title": "서해구청역 에스컬레이터 9호기",
        "phone": "032-451-4310",
        "image_name": "210.jpg",
        "x_percent": 50.68,
        "y_percent": 31.92,
        "marker_type": "beacon",
        "marker_color": "red"
    },
    "210ES010": {
        "station": "서해구청역",
        "title": "서해구청역 에스컬레이터 10호기",
        "phone": "032-451-4310",
        "image_name": "210.jpg",
        "x_percent": 50.68,
        "y_percent": 32.05,
        "marker_type": "beacon",
        "marker_color": "red"
    },
    "210EL001": {
        "station": "서해구청역",
        "title": "서해구청역 엘리베이터 1호기",
        "phone": "032-451-4310",
        "image_name": "210.jpg",
        "x_percent": 56.9,
        "y_percent": 83.26,
        "marker_type": "beacon",
        "marker_color": "red"
    },
    "210EL002": {
        "station": "서해구청역",
        "title": "서해구청역 엘리베이터 2호기",
        "phone": "032-451-4310",
        "image_name": "210.jpg",
        "x_percent": 59.25,
        "y_percent": 71.94,
        "marker_type": "beacon",
        "marker_color": "red"
    },
    "210EL003": {
        "station": "서해구청역",
        "title": "서해구청역 엘리베이터 3호기",
        "phone": "032-451-4310",
        "image_name": "210.jpg",
        "x_percent": 26.4,
        "y_percent": 45.72,
        "marker_type": "beacon",
        "marker_color": "red"
    },
    "210EL004": {
        "station": "서해구청역",
        "title": "서해구청역 엘리베이터 4호기",
        "phone": "032-451-4310",
        "image_name": "210.jpg",
        "x_percent": 32.81,
        "y_percent": 27.36,
        "marker_type": "beacon",
        "marker_color": "red"
    }
};

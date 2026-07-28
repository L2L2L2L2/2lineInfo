// [역사 내 동선 경로 데이터 및 길안내 탐색 모듈]

const stationRoutes = {
    // 1. 역별 노드(위치) 및 간선(이동 통로) 데이터 정의
    "가정역": {
        nodes: {
            // [B3층 승강장]
            "211UPFRONT": { name: "상선 승강장 앞쪽의(ES 1,2호기)", floor: "B3" },
            "211UPREAR": { name: "상선 승강장 뒷쪽의(ES 3,4호기 / EL 2호기)", floor: "B3" },
            "211DOWNFRONT": { name: "하선 승강장 앞쪽의(ES 5,6호기 / EL 3호기)", floor: "B3" },
            "211DOWNREAR": { name: "하선 승강장 뒷쪽의(ES 7,8호기)", floor: "B3" },

            // [B3층 엘리베이터]
            "211EL007": { name: "엘리베이터 1호기 (상선 앞쪽의)", floor: "B3", isEV: true },
            "211EL008": { name: "엘리베이터 2호기 (상선 뒷쪽의)", floor: "B3", isEV: true },
            "211EL009": { name: "엘리베이터 3호기 (하선 앞쪽의)", floor: "B3", isEV: true },
            "211EL010": { name: "엘리베이터 4호기 (하선 뒷쪽의)", floor: "B3", isEV: true },

            // [B2층 중층]
            "B2_MEZZANINE_A": { name: "B2 중층(2, 3, 4, 5번 출구 방향)", floor: "B2" },
            "B2_MEZZANINE_B": { name: "B2 중층(1, 6, 7, 8번 출구 방향)", floor: "B2" },

            // [B1층 대합실 & 역무실 & 화장실] (B1층 동/서 대합실은 서로 단절됨)
            "211STA002": { name: "대합실 (2, 3, 4, 5번 출구 방면)", floor: "B1" },
            "211STA001": { name: "대합실 (1, 6, 7, 8번 출구 방면)", floor: "B1" },
            "OFFICE_3": { name: "3번 출구 게이트 역무실", floor: "B1" },
            "OFFICE_6": { name: "6번 출구 게이트 역무실", floor: "B1" },
            "211TOILET5W": { name: "5번 출구 방면 화장실", floor: "B1" },
            "211TOILET6W": { name: "6번 출구 방면 화장실", floor: "B1" },

            // [B1층 출구]
            "211EXIT001": { name: "1번 출구 (ES 13,14호기 인근)", floor: "B1" },
            "211EXIT002": { name: "2번 출구 (EL 6호기 인근)", floor: "B1" },
            "211EXIT003": { name: "3번 출구", floor: "B1" },
            "211EXIT004": { name: "4번 출구 (ES 15,16호기 인근)", floor: "B1" },
            "211EXIT005": { name: "5번 출구 (ES 15,16호기 인근)", floor: "B1" },
            "211EXIT006": { name: "6번 출구 (EL 5호기 인근)", floor: "B1" },
            "211EXIT007": { name: "7번 출구 (EL 5호기 인근)", floor: "B1" },
            "211EXIT008": { name: "8번 출구 (ES 13,14호기 인근)", floor: "B1" }
        },

        edges: [
            // B3 승강장 ↔ B3 엘리베이터 (양방향)
            { from: "211UPFRONT", to: "211EL007", dist: 5, type: "Walk", step: "상선 전방 엘리베이터 1호기 앞으로 이동해 주세요.", stepRev: "상선 전방 승강장 위치로 이동해 주세요." },
            { from: "211UPREAR", to: "211EL008", dist: 5, type: "Walk", step: "상선 후방 엘리베이터 2호기 앞으로 이동해 주세요.", stepRev: "상선 후방 승강장 위치로 이동해 주세요." },
            { from: "211DOWNFRONT", to: "211EL009", dist: 5, type: "Walk", step: "하선 전방 엘리베이터 3호기 앞으로 이동해 주세요.", stepRev: "하선 전방 승강장 위치로 이동해 주세요." },
            { from: "211DOWNREAR", to: "211EL010", dist: 5, type: "Walk", step: "하선 후방 엘리베이터 4호기 앞으로 이동해 주세요.", stepRev: "하선 후방 승강장 위치로 이동해 주세요." },

            // === [중층 A 연결 (2,3,4,5번 구역)] 단방향(isOneWay) 구분 ===
            { from: "211DOWNFRONT", to: "B2_MEZZANINE_A", dist: 25, type: "ES", step: "에스컬레이터 5호기(상행)를 타고 B2 중층으로 올라가세요.", isOneWay: true },
            { from: "211UPREAR", to: "B2_MEZZANINE_A", dist: 25, type: "ES", step: "에스컬레이터 3호기(상행)를 타고 B2 중층으로 올라가세요.", isOneWay: true },
            { from: "B2_MEZZANINE_A", to: "211DOWNFRONT", dist: 25, type: "ES", step: "에스컬레이터 6호기(하행)를 타고 하선 승강장(전방)으로 내려가세요.", isOneWay: true },
            { from: "B2_MEZZANINE_A", to: "211UPREAR", dist: 25, type: "ES", step: "에스컬레이터 4호기(하행)를 타고 상선 승강장(후방)으로 내려가세요.", isOneWay: true },

            // === [중층 B 연결 (1,6,7,8번 구역)] 단방향(isOneWay) 구분 ===
            { from: "211UPFRONT", to: "B2_MEZZANINE_B", dist: 25, type: "ES", step: "에스컬레이터 1호기(상행)를 타고 B2 중층으로 올라가세요.", isOneWay: true },
            { from: "211DOWNREAR", to: "B2_MEZZANINE_B", dist: 25, type: "ES", step: "에스컬레이터 7호기(상행)를 타고 B2 중층으로 올라가세요.", isOneWay: true },
            { from: "B2_MEZZANINE_B", to: "211UPFRONT", dist: 25, type: "ES", step: "에스컬레이터 2호기(하행)를 타고 상선 승강장(전방)으로 내려가세요.", isOneWay: true },
            { from: "B2_MEZZANINE_B", to: "211DOWNREAR", dist: 25, type: "ES", step: "에스컬레이터 8호기(하행)를 타고 하선 승강장(후방)으로 내려가세요.", isOneWay: true },

            // === B2 중층(A) ↔ B1 대합실(2,3,4,5) 연속 에스컬레이터 ===
            { from: "B2_MEZZANINE_A", to: "211STA002", dist: 20, type: "ES", step: "에스컬레이터 11호기(상행) ➔ 15호기(상행)를 타고 B1 대합실로 올라가세요.", isOneWay: true },
            { from: "211STA002", to: "211EXIT004", dist: 10, type: "ES", step: "에스컬레이터 15호기(상행)를 타고 4번 출구로 나아가세요.", isOneWay: true },
            { from: "211STA002", to: "211EXIT005", dist: 10, type: "ES", step: "에스컬레이터 15호기(상행)를 타고 5번 출구로 나아가세요.", isOneWay: true },
            { from: "211STA002", to: "B2_MEZZANINE_A", dist: 20, type: "ES", step: "에스컬레이터 16호기(하행) ➔ 12호기(하행)를 타고 B2 중층(A)으로 내려가세요.", isOneWay: true },

            // === B2 중층(B) ↔ B1 대합실(1,6,7,8) 연속 에스컬레이터 ===
            { from: "B2_MEZZANINE_B", to: "211STA001", dist: 20, type: "ES", step: "에스컬레이터 9호기(상행) ➔ 13호기(상행)를 타고 B1 대합실로 올라가세요.", isOneWay: true },
            { from: "211STA001", to: "211EXIT001", dist: 10, type: "ES", step: "에스컬레이터 13호기(상행)를 타고 1번 출구로 나아가세요.", isOneWay: true },
            { from: "211STA001", to: "211EXIT008", dist: 10, type: "ES", step: "에스컬레이터 13호기(상행)를 타고 8번 출구로 나아가세요.", isOneWay: true },
            { from: "211STA001", to: "B2_MEZZANINE_B", dist: 20, type: "ES", step: "에스컬레이터 14호기(하행) ➔ 10호기(하행)를 타고 B2 중층(B)으로 내려가세요.", isOneWay: true },

            // === B1 대합실(동/서 각 영역별 내부 보행) ===
            { from: "211STA002", to: "OFFICE_3", dist: 10, type: "Walk", step: "3번 출구 게이트 방면 역무실로 가세요.", stepRev: "역무실에서 B1 대합실 내부로 이동하세요." },
            { from: "211STA002", to: "211EXIT002", dist: 15, type: "Walk", step: "2번 출구 방면으로 이동하세요.", stepRev: "2번 출구에서 B1 대합실 내부로 이동하세요." },
            { from: "211STA002", to: "211EXIT003", dist: 10, type: "Walk", step: "3번 출구 방면으로 이동하세요.", stepRev: "3번 출구에서 B1 대합실 내부로 이동하세요." },
            { from: "211STA002", to: "211EXIT004", dist: 15, type: "Walk", step: "4번 출구 방면으로 이동하세요.", stepRev: "4번 출구에서 B1 대합실 내부로 이동하세요." },
            { from: "211STA002", to: "211EXIT005", dist: 20, type: "Walk", step: "5번 출구 방면으로 이동하세요.", stepRev: "5번 출구에서 B1 대합실 내부로 이동하세요." },
            { from: "211STA002", to: "211TOILET5W", dist: 22, type: "Walk", step: "5번 출구 방면 화장실로 가세요.", stepRev: "화장실에서 B1 대합실 내부로 이동하세요." },

            { from: "211STA001", to: "OFFICE_6", dist: 10, type: "Walk", step: "6번 출구 게이트 방면 역무실로 가세요.", stepRev: "역무실에서 B1 대합실 내부로 이동하세요." },
            { from: "211STA001", to: "211EXIT001", dist: 15, type: "Walk", step: "1번 출구 방면으로 이동하세요.", stepRev: "1번 출구에서 B1 대합실 내부로 이동하세요." },
            { from: "211STA001", to: "211EXIT006", dist: 10, type: "Walk", step: "6번 출구 방면으로 이동하세요.", stepRev: "6번 출구에서 B1 대합실 내부로 이동하세요." },
            { from: "211STA001", to: "211EXIT007", dist: 15, type: "Walk", step: "7번 출구 방면으로 이동하세요.", stepRev: "7번 출구에서 B1 대합실 내부로 이동하세요." },
            { from: "211STA001", to: "211EXIT008", dist: 20, type: "Walk", step: "8번 출구 방면으로 이동하세요.", stepRev: "8번 출구에서 B1 대합실 내부로 이동하세요." },
            { from: "211STA001", to: "211TOILET6W", dist: 12, type: "Walk", step: "6번 출구 방면 화장실로 가세요.", stepRev: "화장실에서 B1 대합실 내부로 이동하세요." },

            // 지상 연결 엘리베이터 5, 6호기
            { from: "211STA001", to: "211EXIT006", dist: 12, type: "EV", step: "지상연결 엘리베이터 5호기를 타고 6번 지상 출구로 올라가세요.", stepRev: "엘리베이터 5호기를 타고 B1 대합실로 내려오세요." },
            { from: "211STA001", to: "211EXIT007", dist: 12, type: "EV", step: "지상연결 엘리베이터 5호기를 타고 7번 지상 출구로 올라가세요.", stepRev: "엘리베이터 5호기를 타고 B1 대합실로 내려오세요." },
            { from: "211STA002", to: "211EXIT002", dist: 12, type: "EV", step: "지상연결 엘리베이터 6호기를 타고 2번 지상 출구로 올라가세요.", stepRev: "엘리베이터 6호기를 타고 B1 대합실로 내려오세요." },
            { from: "211STA002", to: "211EXIT003", dist: 12, type: "EV", step: "지상연결 엘리베이터 6호기를 타고 3번 지상 출구로 올라가세요.", stepRev: "엘리베이터 6호기를 타고 B1 대합실로 내려오세요." },

            // === B3 승강장 층 내부 연결 통로 ===
            { from: "211DOWNFRONT", to: "211DOWNREAR", dist: 20, type: "Walk", step: "하선 승강장 통로를 따라 이동하세요.", stepRev: "하선 승강장 통로를 따라 이동하세요." },
            { from: "211UPFRONT", to: "211UPREAR", dist: 20, type: "Walk", step: "상선 승강장 통로를 따라 이동하세요.", stepRev: "상선 승강장 통로를 따라 이동하세요." }
        ]
    }
};

// data.js의 ID를 routes.js의 노드로 매핑해주는 별칭(Alias) 사전
const idAliases = {
    // 가정역 에스컬레이터 정밀 위치 매핑
    "211ES001": "211UPFRONT",   "211ES002": "211UPFRONT",
    "211ES003": "211UPREAR",    "211ES004": "211UPREAR",
    "211ES005": "211DOWNFRONT", "211ES006": "211DOWNFRONT",
    "211ES007": "211DOWNREAR",  "211ES008": "211DOWNREAR",

    "211ES009": "B2_MEZZANINE_B", "211ES010": "B2_MEZZANINE_B",
    "211ES011": "B2_MEZZANINE_A", "211ES012": "B2_MEZZANINE_A",

    "211ES013": "211EXIT001", "211ES014": "211EXIT008",
    "211ES015": "211EXIT004", "211ES016": "211EXIT005",
    "211ES017": "211EXIT006", "211ES018": "211EXIT007",

    // 가정역 엘리베이터 매핑
    "211EL001": "211STA001", "211EL002": "211STA002", "211EL003": "211STA002",
    "211EL004": "211STA001", "211EL005": "211EXIT006", "211EL006": "211EXIT002",

    // 화장실 매핑
    "211TOILET6M": "211TOILET6W", "211TOILET6W": "211TOILET6W",
    "211TOILET5M": "211TOILET5W", "211TOILET5W": "211TOILET5W",

    // 승강장 방면 매핑
    "211UPMID": "211UPFRONT", "211DOWNMID": "211DOWNFRONT"
};

/**
 * 최단 경로 탐색 알고리즘 (Dijkstra)
 * @param {string} stationName 역명 (예: '가정역')
 * @param {string} rawStartId 출발 노드 ID (예: '211EXIT001')
 * @param {string} rawTargetId 목적지 노드 ID (예: '211EXIT005')
 * @returns {object|null} { pathNodes, steps, totalDist }
 */
function findPath(stationName, rawStartId, rawTargetId) {
    const routeData = stationRoutes[stationName];
    if (!routeData) return null;

    const startId = idAliases[rawStartId] || rawStartId;
    const targetId = idAliases[rawTargetId] || rawTargetId;

    const { nodes, edges } = routeData;
    if (!nodes[startId] || !nodes[targetId]) return null;

    // 인접 리스트 생성 (isOneWay가 아닌 경우 stepRev 적용)
    const adj = {};
    Object.keys(nodes).forEach(id => adj[id] = []);
    
    edges.forEach(edge => {
        adj[edge.from].push({ 
            to: edge.to, 
            dist: edge.dist, 
            step: edge.step, 
            type: edge.type 
        });

        if (!edge.isOneWay) {
            adj[edge.to].push({ 
                to: edge.from, 
                dist: edge.dist, 
                step: edge.stepRev || edge.step, 
                type: edge.type 
            });
        }
    });

    const distances = {};
    const previous = {};
    const edgeUsed = {};
    const unvisited = new Set(Object.keys(nodes));

    Object.keys(nodes).forEach(id => {
        distances[id] = Infinity;
        previous[id] = null;
    });
    distances[startId] = 0;

    while (unvisited.size > 0) {
        let current = null;
        let smallest = Infinity;
        for (const node of unvisited) {
            if (distances[node] < smallest) {
                smallest = distances[node];
                current = node;
            }
        }

        if (current === null || distances[current] === Infinity) break;
        if (current === targetId) break;

        unvisited.delete(current);

        for (const neighbor of adj[current]) {
            if (unvisited.has(neighbor.to)) {
                const alt = distances[current] + neighbor.dist;
                if (alt < distances[neighbor.to]) {
                    distances[neighbor.to] = alt;
                    previous[neighbor.to] = current;
                    edgeUsed[neighbor.to] = neighbor;
                }
            }
        }
    }

    if (distances[targetId] === Infinity) return null;

    // 경로 재구성
    const pathNodes = [];
    const steps = [];
    let curr = targetId;

    while (curr) {
        pathNodes.unshift(curr);
        const prev = previous[curr];
        if (prev) {
            const edge = edgeUsed[curr];
            steps.unshift(edge.step);
        }
        curr = prev;
    }

    return {
        pathNodes: pathNodes,
        steps: steps,
        totalDist: distances[targetId]
    };
}

import { useNavigate } from 'react-router-dom';
import BtnCommon from '@/components/BtnCommon';
import styles from './Empty.module.css';

function Empty() {
  const navigate = useNavigate();
  const handleNewPost = () => {
    navigate(`/products/new`);
  };
  return (
    <div className={styles.emptyScreen}>
      <div>
        <svg
          width="89"
          height="89"
          viewBox="0 0 89 89"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.125 44.7114C11.125 46.1409 12.3877 47.2812 13.9062 47.2812C15.4248 47.2812 16.6597 46.1159 16.6875 44.7114V38.7261C16.6875 37.2966 15.4248 36.1562 13.9062 36.1562C12.3571 36.1562 11.125 37.3216 11.125 38.7261V44.7114ZM38.9375 38.9375C38.9375 38.1999 39.2305 37.4924 39.7521 36.9709C40.2737 36.4493 40.9811 36.1562 41.7188 36.1562C42.4564 36.1562 43.1638 36.4493 43.6854 36.9709C44.207 37.4924 44.5 38.1999 44.5 38.9375V44.5C44.5 45.2376 44.207 45.9451 43.6854 46.4666C43.1638 46.9882 42.4564 47.2812 41.7188 47.2812C40.9811 47.2812 40.2737 46.9882 39.7521 46.4666C39.2305 45.9451 38.9375 45.2376 38.9375 44.5V38.9375Z"
            fill="#ECF1FF"
          />
          <path
            d="M23.2234 6.50833C23.3219 6.16822 23.4865 5.85085 23.7077 5.57436C23.9289 5.29788 24.2024 5.06769 24.5126 4.89696C24.8228 4.72623 25.1636 4.61831 25.5156 4.57935C25.8675 4.54039 26.2237 4.57117 26.5637 4.66992C29.192 5.43198 31.214 6.6752 32.4933 8.38567C33.0932 9.17294 33.5216 10.0771 33.7511 11.0398C33.9805 12.0026 34.0059 13.0028 33.8256 13.976C33.2026 17.3858 30.107 20.4702 26.3357 20.4702C23.788 20.4702 21.5714 19.4634 20.0222 18.7597C19.6801 18.6068 19.3714 18.4649 19.0988 18.3537C17.5191 17.7084 16.1285 17.3802 13.9341 18.2424C12.0011 18.9989 11.1194 20.9347 11.3558 24.2388C11.4448 25.457 11.684 26.6863 11.9955 27.8266C12.1652 27.8183 12.3404 27.8127 12.5156 27.8127H14.4542C15.5529 27.8125 16.6272 28.1376 17.5413 28.7472L20.3115 30.594H27.1533C27.6702 30.5942 28.1769 30.4504 28.6166 30.1787C29.0562 29.9071 29.4115 29.5183 29.6426 29.0559L36.3037 15.7365C36.9967 14.3509 38.0619 13.1856 39.3798 12.3711C40.6978 11.5567 42.2165 11.1253 43.7658 11.1252H48.6719C49.9632 11.1252 51.2289 11.4848 52.3273 12.1636C53.4258 12.8425 54.3135 13.8138 54.8909 14.9688C55.4684 16.1238 55.7129 17.4167 55.5969 18.7028C55.4809 19.9888 55.0091 21.2172 54.2344 22.2502H56.5845L59.6578 14.8521C61.2988 10.9027 65.034 8.34395 69.1391 8.34395H82.1665C82.7505 8.34395 83.1733 8.98364 82.9341 9.53989L82.3 11.1252C80.9761 14.4905 77.85 16.6877 74.3818 16.6877H69.1363C68.7644 16.697 68.4028 16.8117 68.0936 17.0185C67.7844 17.2253 67.5403 17.5157 67.3897 17.8558L65.4984 22.2502H75.7056C76.5508 22.2503 77.3849 22.4431 78.1445 22.8138C78.9041 23.1845 79.5692 23.7235 80.0894 24.3897C80.6095 25.056 80.971 25.832 81.1463 26.6588C81.3216 27.4857 81.3062 28.3416 81.1012 29.1616L80.7619 30.5105C80.4894 31.6035 80.0611 32.6243 79.502 33.5476H82.5253C84.1384 33.5476 84.9588 35.0662 84.9588 36.6793V40.3283C84.9588 46.7502 80.0444 52.0235 72.7213 52.7577H81.5657C83.596 52.7577 85.2648 53.898 85.2648 55.9284V66.0855C85.2648 76.5291 79.3101 83.218 72.8326 83.218H66.6777C66.2083 84.1227 65.4994 84.8811 64.6283 85.4104C63.7572 85.9396 62.7574 86.2193 61.7382 86.219H23.8631C22.8188 86.2192 21.8085 85.8479 21.013 85.1712C20.2175 84.4946 19.6888 83.557 19.5215 82.5262C19.3542 81.4954 19.5593 80.4386 20.1 79.5452C20.6407 78.6517 21.4817 77.9799 22.4725 77.6499L31.7007 74.5739C32.8903 74.1779 33.9754 73.519 34.8754 72.646C35.7753 71.7731 36.4669 70.7085 36.8988 69.5315H19.8581C17.5688 69.5312 15.3149 68.9657 13.2965 67.8852C11.2782 66.8047 9.55781 65.2426 8.28813 63.3376L5.11472 58.5817C3.59177 56.2959 2.77981 53.6104 2.78125 50.8637V37.5471C2.78125 34.2652 4.4055 31.3644 6.89194 29.601C6.41839 27.9781 6.11271 26.3108 5.97969 24.6254C5.68766 20.5703 6.63885 15.311 11.9649 13.2223C15.8587 11.6954 18.7484 12.3879 21.1347 13.3613C21.7549 13.6172 22.2834 13.8508 22.7562 14.0594C24.1552 14.6796 25.0535 15.0801 26.3357 15.0801C27.1617 15.0801 28.302 14.2096 28.5217 13.0109C28.5694 12.7677 28.5635 12.5171 28.5044 12.2764C28.4453 12.0358 28.3345 11.8109 28.1796 11.6175C27.7986 11.1085 26.9336 10.3882 25.0646 9.84583C24.3784 9.64687 23.7992 9.18353 23.4545 8.55768C23.1097 7.93183 23.0248 7.19469 23.2234 6.50833ZM43.7685 16.6877C43.2522 16.688 42.7461 16.832 42.3069 17.1036C41.8678 17.3753 41.5129 17.7638 41.2821 18.2257L34.468 31.8483H34.4513L33.7004 33.2389C33.2232 34.1218 32.5159 34.8592 31.6537 35.3728C30.7914 35.8865 29.8063 36.1572 28.8026 36.1565H20.3115C19.2127 36.1567 18.1385 35.8315 17.2243 35.222L14.4542 33.3752H12.5156C11.4092 33.3752 10.348 33.8147 9.56567 34.5971C8.78329 35.3795 8.34375 36.4406 8.34375 37.5471V50.8665C8.34423 51.5328 8.42453 52.1967 8.58294 52.844L25.0646 58.5817C17.9029 65.7434 18.2236 52.844 8.58294 52.844L12.9189 60.2532C13.6805 61.3957 14.7123 62.3326 15.9228 62.9808C17.1333 63.629 18.485 63.9684 19.8581 63.969H38.6844C38.9292 63.969 39.1711 63.9912 39.402 64.0301L39.4993 63.969H45.3232C46.8585 64.0858 49.5368 65.2873 47.9738 69.1449C46.3134 73.2389 43.1344 78.476 41.0207 80.6565H61.7354L63.8325 71.2141C63.9215 70.8164 63.966 70.4131 63.966 70.007V42.6395C63.966 41.6314 63.692 40.6422 63.1733 39.7776L62.6198 38.857C61.9542 37.7474 60.9225 36.9045 59.7023 36.4735C58.9875 36.2232 58.4035 35.6058 58.4035 34.8493C58.4035 34.4583 58.5588 34.0834 58.8352 33.8069C59.1117 33.5305 59.4866 33.3752 59.8775 33.3752H69.9679C71.2083 33.375 72.4131 32.9602 73.3907 32.1968C74.3683 31.4333 75.0627 30.365 75.3635 29.1616L75.7001 27.8127H42.5142C42.3957 27.8125 42.2793 27.782 42.1759 27.7241C42.0726 27.6662 41.9857 27.5829 41.9236 27.4821C41.8615 27.3812 41.8261 27.2662 41.821 27.1478C41.8158 27.0295 41.8409 26.9118 41.894 26.8059L44.4611 21.6717C44.7922 21.0096 45.3012 20.4529 45.9309 20.0638C46.5607 19.6747 47.2864 19.4688 48.0266 19.469H48.6719C49.0407 19.469 49.3944 19.3224 49.6552 19.0616C49.916 18.8009 50.0625 18.4471 50.0625 18.0783C50.0625 17.7095 49.916 17.3558 49.6552 17.095C49.3944 16.8342 49.0407 16.6877 48.6719 16.6877H43.7658H43.7685Z"
            fill="#ECF1FF"
          />
        </svg>

        <p className={styles.emptyScreenText}>
          아직 생성된 플레이리스트가 없어용...
        </p>
      </div>

      <BtnCommon onClick={handleNewPost}>플레이리스트 추가하기</BtnCommon>
    </div>
  );
}

export default Empty;

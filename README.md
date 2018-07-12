# playable-tinder
Wisebirds Playable Ads 앱 (2018.07.16 라이브)

> 하나의 html 파일 안에 모든 리소스가 포함되어져야 하는 이슈가 있어 React를 이용하여 개발 진행.\
> 모든 asset들의 총 용량은 2MB이내로 제한.

## 빌드
```bash
npm run build
```

아래 html 내 &lt;script&gt;태그의 `src` attribute를 제거하고, 빌드 후 생성되는 단일 javascript파일 내용을 html 파일 내에 전체 복사 & 붙여넣기하여 단일 파일로 제공한다.

```html
<script src="/static/js/main.xxxxxxxx.js"></script>
```

[페이스북 플레이어블 업로드 참고 이미지](https://mail.google.com/mail/u/1/?ui=2&ik=b5c907f8e8&view=fimg&th=1648c1708a70b661&attid=0.1&disp=emb&attbid=ANGjdJ9-QY9jnt0V5kWf5_DzduMVvjZpFlkIXiflMuGt8Wbs2Uhu0o74nos76q1vSIqxeK8ta5W79Mkkm0cxX3_gLLLjDEvUoz93fp_Tq5EMNZxX_B-n8_xW3uL62rQ&sz=w1608-h914&ats=1531359341210&rm=1648c1708a70b661&zw&atsh=1)

## Swipable library
NPM [react-swipy](https://www.npmjs.com/package/react-swipy) 라이브러리 사용.\
단, 이 라이브러리의 문제는 좌/우 스와이프밖에 지원해주지 않아, 상/하 스와이프 기능을 추가 구현.
> 원본 깃헙: https://github.com/goncy/react-swipy#readme

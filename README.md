# Fresh 2 You, 농산물 직거래 플랫폼 프론트엔드 Repository 입니다.

<!--프로젝트 버튼-->
[![View Demo][view-demo-shield]][view-demo-url] [![Report bug][report-bug-shield]][report-bug-url] [![Request feature][request-feature-shield]][request-feature-url]

# [1] 프로젝트 소개
안녕하세요, 저희는 농산물 직거래 플랫폼을 개발한 비트와 바이트팀입니다.

❗️이 플랫폼은 농부와 소비자가 직접 연결될 수 있도록 도와주는 **온라인 마켓플레이스**입니다. 농부는 자신의 농산물을 소비자에게 직접 판매할 수 있으며, 소비자는 중간 유통업자를 거치지 않고 신선한 농산물을 합리적인 가격에 구매할 수 있습니다❗️

## Features
- 다양한 화면 크기에 최적화된 **반응형 웹 디자인**을 구현해 사용자가 데스크톱, 태블릿, 모바일 등 어떤 디바이스에서도 **일관된 경험**을 할 수 있도록 설계되었습니다.
- **TanStack**(React Query)를 이용하여 API 요청에 대한 응답을 **자동으로 캐싱**하여 **서버상태 관리**를 효율적으로 처리하였습니다.
- API 응답이 오래 걸릴 경우, **스켈레톤 UI**를 활용하여 사용자에게 로딩 중임을 시각적으로 표시함으로써 보다 나은 **UX**를 제공했습니다.
- 엑세스 토큰이 없거나 만료된 경우 로그인 페이지로 **자동 리다이렉트 기능**을 적용하여 보안성을 강화하고, 세션 만료로 인한 문제를 예방하고 원활한 사용자 경험을 제공하였습니다.

## Technologies
- Language: Javascript & Typescript
- Build Tool : Vite
- Libraries
    - React
        - react-dom
        - react-router-dom
    - 상태 관리
        - Tanstack-Query
        - Jotai
    - StompJs
    - Json-Server
    - 스타일링
        - Tailwind CSS
        - CSS 3
    - Toss tools
        - use-funnel: 단계별 상태 관리 라이브러리
        - overaly-kit(userOverlay): Modal창을 위한 state 관리 라이브러리
- ETC
    - Convention
        - Prettier
        - ESLint
    - Kakao API



# [2] Getting Started
*만약 운영체제에 따라 프로그램을 다르게 동작시켜야한다면, 운영체제별로 동작 방법을 설명하세요*

## Prerequisites
*프로젝트를 동작시키기 위해 필요한 소프트웨어와 라이브러리를 나열하고 어떻게 다운받을 수 있는지 설명하세요.*

- [OpenWeather API key](https://openweathermap.org/) (무료)
- npm
```bash
npm install npm@latest -g
```

## Installation
*어떻게 이 프로젝트의 소스코드를 다운받을 수 있는지 설명하세요.*
1. Repository 클론
```bash
git clone https://github.com/your-username/project-repository
```
2. NPM packages 설치
```bash
npm install
```

## Configuration
*코드의 어느 부분을 채우거나 수정해야하는지 설명하세요.*
- `config.js`에 Openweather API key를 입력
```bash
const API_KEY = "<Your API key>";
```



# [3] Usage
***스크린샷, 코드** 등을 통해 **사용 방법**과 **사용 예제**를 보여주세요. 사용 예제별로 h2 헤더로 나누어 설명할 수 있습니다.*

![usage](img/usage.png)

```java
// 몇 개의 API 사용 예제를 코드와 함께 보여주세요.
```



# [4] Trouble Shooting


# [5] Contact
- 📧 dev.ujin518@gmail.com
- 📋 [https://dev-ujin.github.io/contact](https://dev-ujin.github.io/contact)



# [6] License
MIT 라이센스
라이센스에 대한 정보는 [`LICENSE`][license-url]에 있습니다.



<!--Url for Badges-->
[license-shield]: https://img.shields.io/github/license/dev-ujin/readme-template?labelColor=D8D8D8&color=04B4AE
[repository-size-shield]: https://img.shields.io/github/repo-size/dev-ujin/readme-template?labelColor=D8D8D8&color=BE81F7
[issue-closed-shield]: https://img.shields.io/github/issues-closed/dev-ujin/readme-template?labelColor=D8D8D8&color=FE9A2E

<!--Url for Buttons-->
[readme-eng-shield]: https://img.shields.io/badge/-readme%20in%20english-2E2E2E?style=for-the-badge
[view-demo-shield]: https://img.shields.io/badge/-%F0%9F%98%8E%20view%20demo-F3F781?style=for-the-badge
[view-demo-url]: https://dev-ujin.github.io
[report-bug-shield]: https://img.shields.io/badge/-%F0%9F%90%9E%20report%20bug-F5A9A9?style=for-the-badge
[report-bug-url]: https://github.com/dev-ujin/readme-template/issues
[request-feature-shield]: https://img.shields.io/badge/-%E2%9C%A8%20request%20feature-A9D0F5?style=for-the-badge
[request-feature-url]: https://github.com/dev-ujin/readme-template/issues

<!--URLS-->
[license-url]: LICENSE.md
[contribution-url]: CONTRIBUTION.md
[readme-eng-url]: ../README.md



## Getting Start

### 설치
- //
- VSCode의 **Recommended Extension들 설치**(Prettier, ESLint, StyleLint 등)
- 패키지 매니져 pnpm 설치(이미 설치가 됐다면 pass!)
- pnpm version은 **_최소 8 이상_** 필요

```bash
wget -qO- https://get.pnpm.io/install.sh | sh -
```

- 디펜던시 설치

```bash
pnpm install
```

- 프로젝트에서 추가 패키지 설치 필요시

```bash
pnpm install <패키지명> --filter <프로젝트명>
```

- VSCode Extension > 이동 후 추천 확장팩들 설치

### 스토리북

##### 스토리북 서버 띄우기

- SASS 프로젝트

```bash
pnpm storybook:sass
```

- Styled Components 프로젝트

```bash
pnpm storybook:styled
```

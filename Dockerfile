FROM mcr.microsoft.com/playwright:v1.49.0
WORKDIR /AQA_Playwright

COPY . .

RUN npm install

CMD ["npx", "playwright", "test"]
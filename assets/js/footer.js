const footerHtml = `
        <div class="footer-inner">
          <div class="footer-cv">
            <p class="footer-cv-logo">
              <a href="/">
                <img src="/assets/img/logo-mono.svg" alt="Misora Connect" />
              </a>
            </p>
            <p class="footer-cv-description">信頼と技術で、通信の<br />“新しい当たり前”を創る。</p>
          </div>
          <div class="footer-nav">
            <div class="footer-nav-inner">
              <div class="footer-nav-section">
                <ul class="footer-nav-list">
                  <li class="footer-nav-ttl"><a href="/company/">企業情報</a></li>
                  <li class="footer-nav-item"><a href="/company/ceo-message/">トップメッセージ</a></li>
                  <li class="footer-nav-item"><a href="/company/history/">会社沿革</a></li>
                  <li class="footer-nav-item"><a href="/company/why-us/">ミソラコネクトが選ばれる理由</a></li>
                </ul>
                <ul class="footer-nav-list">
                  <li class="footer-nav-ttl"><a href="/service/">サービス紹介</a></li>
                  <li class="footer-nav-item"><a href="/service/iot/">IoT/M2M向け</a></li>
                  <li class="footer-nav-item"><a href="/service/mobile_worker/">モバイルワーカー向け</a></li>
                  <li class="footer-nav-item"><a href="/service/spot/">短期・スポット利用</a></li>
                  <li class="footer-nav-item"><a href="/service/options/">オプションサービス</a></li>
                  <li class="footer-nav-item"><a href="/service/mvne/">MVNO事業支援（MVNE）</a></li>
                </ul>
              </div>
              <div class="footer-nav-section">
                <ul class="footer-nav-list">
                  <li class="footer-nav-ttl"><a href="/price/">料金プラン</a></li>
                  <li class="footer-nav-item"><a href="/price/sim/">SIMの種類</a></li>
                  <li class="footer-nav-item"><a href="/price/individua_flatrate_plan/">個別定額プラン</a></li>
                  <li class="footer-nav-item"><a href="/price/data_share_plan/">データシェアプラン</a></li>
                  <li class="footer-nav-item"><a href="/price/2step_plan/">二段階定額プラン</a></li>
                  <li class="footer-nav-item"><a href="/price/uplink_plan/">上り優先プラン</a></li>
                  <li class="footer-nav-item"><a href="/price/voice_plan/">音声通話付きプラン(SHIFT-D)</a></li>
                  <li class="footer-nav-item"><a href="/price/oneday_plan/">1Dayプラン</a></li>
                  <li class="footer-nav-item"><a href="/price/prepaid/">プリペイドSIMプラン</a></li>
                  <li class="footer-nav-item"><a href="/price/options/">オプションサービス</a></li>
                </ul>
              </div>
              <div class="footer-nav-section">
                <ul class="footer-nav-list">
                  <li class="footer-nav-ttl"><a href="/info/">お知らせ</a></li>
                  <li class="footer-nav-item"><a href="https://m-air-mvno.com/" target="_blank"><span class="blank">障害情報</span></a></li>
                  <li class="footer-nav-item"><a href="/info/maintenance/">メンテナンス情報</a></li>
                </ul>
                <!-- ★ ドキュメントを追加 -->
                <ul class="footer-nav-list">
                  <li class="footer-nav-ttl"><a href="/docs/">ドキュメント</a></li>
                </ul>
                <ul class="footer-nav-list">
                  <li class="footer-nav-ttl"><a href="/procedures/">お手続き方法</a></li>
                </ul>
                <ul class="footer-nav-list">
                  <li class="footer-nav-ttl"><a href="/contact/">お問い合わせ</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="footer-other">
            <p class="footer-other-link"><a href="/conditions/">利用規約</a>（モバイル通信約款・個人情報保護ポリシー・外部送信ポリシー等）</p>
            <p class="footer-other-copy">© 2025 Misora Connect Inc. All rights reserved.</p>
          </div>
        </div>
        <div class="scroll-top">
          <a href="#">
            <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="21" cy="21" r="20.5" stroke="white" class="scroll-top-circle" />
              <path d="M26 21C24.0474 19.0474 22.9526 17.9526 21 16L16 21" stroke="white" stroke-linecap="round" stroke-linejoin="round" class="scroll-top-arrow" />
              <path d="M21 17V26" stroke="white" stroke-linecap="round" class="scroll-top-arrow2" />
            </svg>
          </a>
        </div>
`;

document.querySelector("#footer").insertAdjacentHTML("beforeend", footerHtml);

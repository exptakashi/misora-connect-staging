const headerHtml = `
        <div class="header-inner">
          <div class="header-logo">
            <a href="/">
              <img src="/assets/img/logo.svg" alt="Misora Connect" />
            </a>
          </div>
          <button class="header-nav-toggle">
            <span class="header-nav-toggle-line"></span>
            <span class="header-nav-toggle-line"></span>
          </button>
          <nav class="header-nav">
            <ul class="header-nav-list">
              <li class="header-nav-item hnv1">
                <p class="first-level"><a href="/company/" class="hm-fl1">企業情報</a></p>
                <ul class="header-nav-sub-list hm-sl1">
                  <div class="header-nav-sub-list-inner">
                    <li class="header-nav-sub-item sp-top">
                      <a href="/company/">企業情報</a>
                    </li>
                    <li class="header-nav-sub-item">
                      <a href="/company/ceo-message/">トップメッセージ</a>
                    </li>
                    <li class="header-nav-sub-item">
                      <a href="/company/history/">会社沿革</a>
                    </li>
                    <li class="header-nav-sub-item">
                      <a href="/company/why-us/">ミソラコネクトが選ばれる理由</a>
                    </li>
                  </div>
                </ul>
              </li>
              <li class="header-nav-item hnv2">
                <p class="first-level"><a href="/service/" class="hm-fl2">サービス紹介</a></p>
                <ul class="header-nav-sub-list hm-sl2">
                  <div class="header-nav-sub-list-inner">
                    <li class="header-nav-sub-item sp-top">
                      <a href="/service/">サービス紹介</a>
                    </li>
                    <li class="header-nav-sub-item">
                      <a href="/service/iot/">IoT/M2M向け</a>
                    </li>
                    <li class="header-nav-sub-item">
                      <a href="/service/mobile_worker/">モバイルワーカー向け</a>
                    </li>
                    <li class="header-nav-sub-item">
                      <a href="/service/spot/">短期・スポット利用</a>
                    </li>
                    <li class="header-nav-sub-item">
                      <a href="/service/options/">オプションサービス</a>
                    </li>
                    <li class="header-nav-sub-item">
                      <a href="/service/mvne/">MVNO事業支援（MVNE）</a>
                    </li>
                  </div>
                </ul>
              </li>
              <li class="header-nav-item hnv3">
                <p class="first-level"><a href="/price/" class="hm-fl3">料金プラン</a></p>
                <ul class="header-nav-sub-list hm-sl3">
                  <div class="header-nav-sub-list-inner">
                    <li class="header-nav-sub-item sp-top">
                      <a href="/price/">料金プラン</a>
                    </li>
                    <li class="header-nav-sub-item">
                      <a href="/price/sim/">SIMの種類</a>
                    </li>
                    <li class="header-nav-sub-item">
                      <a href="/price/individua_flatrate_plan/">個別定額プラン</a>
                    </li>
                    <li class="header-nav-sub-item">
                      <a href="/price/data_share_plan/">データシェアプラン</a>
                    </li>
                    <li class="header-nav-sub-item">
                      <a href="/price/2step_plan/">二段階定額プラン</a>
                    </li>
                    <li class="header-nav-sub-item">
                      <a href="/price/uplink_plan/">上り優先プラン</a>
                    </li>
                    <li class="header-nav-sub-item">
                      <a href="/price/voice_plan/">音声通話付きプラン(SHIFT-D)</a>
                    </li>
                    <li class="header-nav-sub-item">
                      <a href="/price/oneday_plan/">1Dayプラン</a>
                    </li>
                    <li class="header-nav-sub-item">
                      <a href="/price/prepaid/">プリペイドSIMプラン</a>
                    </li>
                    <li class="header-nav-sub-item">
                      <a href="/price/options/">オプションサービス</a>
                    </li>
                  </div>
                </ul>
              </li>
              <li class="header-nav-item hnv4">
                <p class="first-level"><a href="/info/" class="hm-fl4">お知らせ</a></p>
                <ul class="header-nav-sub-list hm-sl4">
                  <div class="header-nav-sub-list-inner">
                    <li class="header-nav-sub-item sp-top">
                      <a href="/info/">お知らせ</a>
                    </li>
                    <li class="header-nav-sub-item">
                      <a href="https://m-air-mvno.com/" target="_blank"><span class="blank">障害情報</span></a>
                    </li>
                    <li class="header-nav-sub-item">
                      <a href="/info/maintenance/">メンテナンス情報</a>
                    </li>
                  </div>
                </ul>
              </li>
              <li class="header-nav-item">
                <p class="first-level"><a href="/procedures/" class="hm-procedures">お手続き方法</a></p>
              </li>
              <li class="header-nav-item">
                <p class="contact">
                  <a href="/contact/" class="hm-contact"><span>お問い合わせ</span></a>
                </p>
              </li>
            </ul>
          </nav>
        </div>
`;

document.querySelector("#header").insertAdjacentHTML("beforeend", headerHtml);

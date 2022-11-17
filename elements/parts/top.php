<div class="top">
  <?php if(!isset($_GET['page'])) { ?>
  <div class="fullwidth">
    <div class="drop ipad">
      <img src="<?=$app->url?>assets/image/crow-ipad.png" alt="" />
    </div>
    <div class="nest">
      <div class="crow">
        <div class="ws-1"></div>
        <div class="ws-10">
          <p><span>A smart grid framework,</span> <br />not just for grids
          </p>
          <div class="spacer half"></div>

          <ul class="inline">
            <li>
              <a href="?download=crow-3.0/crow.css" target="_blank" class="button blue" style="padding-top: 13px;">Download css</a>
            </li>
            <li>
              <a href="https://github.com/kkortes/crow" target="_blank" class="button green" style="padding-top: 13px;">
                <span class="icon icon-github"></span>
                Github
              </a>
            </li>
          </ul>
          <ul class="inline hide-smartphone">
            <li>
              <a href="?download=crow-3.0/crow.styl" target="_blank" class="button lightred" style="padding-top: 13px;">Stylus</a>
            </li>
            <li>
              <a href="?download=crow-3.0/crow.less" target="_blank" class="button pink" style="padding-top: 13px;">Less</a>
            </li>
            <li>
              <a href="?download=crow-3.0/crow.scss" target="_blank" class="button deepblue" style="padding-top: 13px;">Sass</a>
            </li>
          </ul>
        </div>
        <div class="ws-1"></div>
      </div>

      <a href="<?=$app->url?>" class="drop crow-logo">
        <span class="icon icon-crow-logo-circle-text">
          <span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span><span class="path5"></span><span class="path6"></span><span class="path7"></span>
        </span>
      </a>
    </div>
  </div> <?php } ?>
</div>
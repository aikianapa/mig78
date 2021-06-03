<!DOCTYPE html>
<html lang="en">
<wb-var assets="/modules/yonger/tpl/assets" />
<wb-include wb-src="signhead.inc.php" />

<body class="bg-light" id="signup">
    <div class="row h-100">
        <div class="col-12 d-none d-sm-inline col-sm-6 col-lg-7 pr-0" id="image">
            <div class="d-flex align-items-center">
                <div class="container">
                    <img src="/module/yonger/logo" class="position-absolute" style="top: 10vh; width: 150px;">
                    <h1>
                        Легко создавайте,
                        <br />развивайте сайты
                        <br />и онлайн-сервисы!
                    </h1>
                    <p class="mt-5">
                        Yonger - это мощное, многофункциональное ядро для разработки веб-приложений любой сложности. Мы
                        подготовили все необходимое, чтобы вам было как можно комфортнее работать.
                    </p>
                    <a class="btn btn-secondary btn-rounded">Подробнее</a>
                </div>

            </div>
        </div>
        <div class="col-12 col-sm-6 col-lg-5" id="form">
            <div class="container">
                <div class="row mt-5">
                    <div class="col-12 col-md-6 offset-md-4 offset-xl-5">
                        <p class="">Ещё нет аккаунта?</p>
                        <h4><a href="/signup">Зарегистрироваться</a></h4>
                    </div>
                </div>
                <div class="d-flex">
                    <form class="d-block" id="signin">
                        <h2 class="mb-4">Вход</h2>
                        <div class="row">
                            <div class="col-12 col-md-7">
                                <label class="form-control-label">Эл.почта</label>
                                <input type="email" placeholder="" class="form-control"
                                    name="login" required>
                            </div>
                            <div class="col-12 col-md-5">
                                <label class="form-control-label">Пароль</label>
                                <input type="password" placeholder="Пароль" class="form-control" name="password">
                                <a href="javascript:wbapp.auth('#signin', 'signin');" class="btn btn-primary mt-4 w-100">Войти в систему</a>
                            </div>
                            <div class="signin-error alert alert-danger text-center mt-3 d-none">
                                Не удалось выполнить вход.<br>Пожалуйста, попробуйте ещё раз.
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>

    <wb-include wb-snippet="wbapp" />
</body>

</html>
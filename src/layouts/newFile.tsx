import MainMenuView from "../components/MainMenuView.astro";
import MenuItemView from "../components/MenuItemView.astro";
import menuItems from "../data/menuItemsData";
import { Astro } from "./Layout.astro";

<Fragment>
    <html lang="es">
        <head>
            <meta charset="UTF-8" />
            <meta name="description" content="Astro description" />
            <meta name="keywords" content="desarrollo de paginas web, diseñador gráfico, maquetador web, elaboración de paginas web, desarrollo web profesional" />
            <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
            <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
            <link rel="apple-touch-icon" sizes="144x144" href="apple-touch-icon.png" />
            <link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;700&display=swap" rel="stylesheet" />
            <meta name="generator" content={Astro.generator} />
            <title>{title}</title>

            <meta name="distribution" content="global" />
            <meta name="author" content="Edgar Cornejo Cahuana" />
            <meta name="designer" content="Edgar Cornejo" />
            <meta property="fb:page_id" content="394466673993640" />
            <meta property="fb:admins" content="100000001685554" />
            <meta property="og:title" content="edgarcornejo.com" />
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://www.edgarcornejo.com" />
            <meta property="og:image" content="https://www.edgarcornejo.com/img/edgarcornejo.png" />
            <meta property="og:site_name" content="edgarcornejo.com" />
            <meta name="google-site-verification" content="tepZV8pXm5w4Dq1SGa9KJml6qC2Ojq0dLlvHRBAAllQ" />
            <meta name="msvalidate.01" content="7E5549D4E71D0C4A0620EA0367533CD9" />

            {/** Twitter Card*/}
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:site" content="@devcornejo" />
            <meta name="twitter:title" content="Edgar Cornejo" />
            <meta name="twitter:description" content="Mi nombre es Edgar Cornejo ofrezco los servicios de diseño gráfico, desarrollo web front-end y posicionamiento en Internet." />
            <meta name="twitter:creator" content="@devcornejo" />
            <meta name="twitter:image" content="https://www.edgarcornejo.com/img/edgarcornejo.png" />
            <meta name="twitter:domain" content="https://www.edgarcornejo.com/" />

            <script type="application/ld+json">{`
			{
				"@context": "http://schema.org",
				"@type": "Organization",
				"name": "Edgar Cornejo",
				"email": "info@edgarcornejo.com",
				"url": "https://www.edgarcornejo.com",
				"logo": "https://www.edgarcornejo.com/img/edgarcornejo.png",
				"contactPoint": [
					{
						"@type": "ContactPoint",
						"telephone": "+51-974795622",
						"contactType": "customer support"
					}
				],
				"sameAs": [
					"https://www.facebook.com/devcornejo",
					"https://github.com/edgarcornejo",
					"https://twitter.com/devcornejo",
					"https://www.youtube.com/user/devcornejo",
					"http://pinterest.com/Edgarcornejo/",
					"https://www.linkedin.com/pub/edgar-cornejo-cahuana/48/150/974"
				]
			}
		`}</script>

            {/** Google tag (gtag.js)
    <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-PRJWX26WVF"
    ></script>
    <script>
        window.dataLayer = window.dataLayer || [];
        function gtag() \\{
            dataLayer.push(arguments);
        \\}
        gtag("js", new Date());

        gtag("config", "G-PRJWX26WVF");
    </script>*/}
        </head>

        <body itemscope itemtype="http://data-vocabulary.org/Person">
            <header id="inicio">
                <div class="wrap-logo">
                    <img itemprop="logo" loading="lazy" src="/img/edgarcornejo.svg" alt="Edgar Cornejo" />
                </div>
                <hgroup>
                    <h2 itemprop="name">Edgar Cornejo</h2>
                    <h1 itemprop="jobTitle">
                        Soy
                        <a href="designer/" title="Diseñador Gráfico">Diseñador Gráfico</a>
                        y
                        <br />
                        <a href="frontend-developer/" title="Desarrollador Web front-end">
                            Desarrollador Web front-end
                        </a>
                    </h1>
                </hgroup>
                <a class="llamame anin-rapido" href="tel:+51974795622" title="+51 974 795 622">
                    Llámame: +51 974 795 622
                </a>

                <input type="checkbox" id="open" class="menu-checkbox" />
                <nav id="topnav">
                    <label for="open" class="menu-open"></label>
                    <MainMenuView>
                        {menuItems.map((item) => <Fragment><MenuItemView {...item} /></Fragment>)}
                    </MainMenuView>
                </nav>
            </header>

            <slot />
        </body>
    </html>

    <style is:global lang="styl">{`
	/*reset*/
	html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video
		border 0
		box-sizing border-box
		font-size 100%
		margin 0
		outline 0
		padding 0
		text-rendering optimizeLegibility
		vertical-align top

	/*Variables*/
	/*Colores*/
	eCeleste = hsl(195, 77%, 57%)
	eAzul = hsl(255, 77%, 57%)
	eRed =hsl(345, 77%, 57%)
	eDark = hsl(236, 77%, 14%)

	/*Color Texto*/
	textWhite = #FFFFFF
	textDark = hsl(236, 77%, 14%)

	/*Color Fondo*/
	backWhite = #FFFFFF
	backDark = hsl(236, 77%, 14%)
	backCeleste = #BFEEFF

	li
		list-style none

	@viewport
		width device-width

	::-webkit-scrollbar
		width 15px

	::-webkit-scrollbar-track
		background backCeleste

	::-webkit-scrollbar-thumb
		border-radius 5px
		background eCeleste

	img
		vertical-align middle

	/*Estilos de pagina*/
	body
		background backWhite
		font-family 'Ubuntu',Helvetica,Arial,sans-serif
		font-variant-ligatures no-common-ligatures
		width 100%
		height 100%
		color textDark
		background linear-gradient(90deg, backWhite 20px, transparent 1%) center, linear-gradient(backWhite 20px, transparent 1%) center, backCeleste 
		background-size 22px 22px

	html
		width 100%
		height 100%
		scroll-behavior smooth

	a
		text-decoration none
		color eCeleste
		&:hover
			color textDark

	/*Animacion basica*/
	.anin-rapido
		transition all .1s ease-in-out

	.anin-normal
		transition all .2s ease-in-out

	.anin-lento
		transition all .3s ease-in-out

	/*Logotipo principal*/
	@keyframes logo
		from
			opacity 0
			left -100px
		to
			opacity 1
			left 0

	/*Logotipo secundario*/
	@keyframes logo-s
		from
			opacity 0
			left -100px
		to
			opacity 1
			left 80px

	/*Menu secundario*/
	@keyframes menu-s
		from
			opacity 0
			left -100px
		to
			opacity 1
			left 100px

	@keyframes callme
		from
			opacity 0
		to
			opacity 1

	@keyframes titulo1
		from
			opacity 0
			bottom 100px
		to
			opacity 1
			bottom 0

	@keyframes titulo2
		from
			opacity 0
			bottom 50px
		to
			opacity 1
			bottom 0
	
	/*Menu pagina de inicio*/
	#topnav
		height 4rem
		text-align center
		width 100%
		ul
			display flex
			align-items center
			height 4rem
			margin 0 auto
			max-width 1300px
		li
			width 20%
		a
		cursor pointer
		font-size 1.4rem
		letter-spacing 1px
		text-transform uppercase
		font-weight bolder
	
	.menu-checkbox
		display none
	
	/*Responsive Design*/
	@media screen and (max-width:1366px)
		#topnav
			height 3rem
			ul
				height 3rem
				max-width 1024px
				li
					a
						font-size 1rem

	@media screen and (max-width:768px)
		#topnav
			ul
				li
					a
						font-size 1rem
						font-weight normal
	
	@media screen and (max-width:640px) 
		#topnav
			border 0
			height auto
			ul
				display none
				height auto
			li
				width 100%
				line-height 4rem
				border-top solid 1px eCeleste
		
		.menu-open
			cursor pointer
			user-select none
			height 40px
			width 40px
			margin-bottom 1rem
			margin-top 1rem
			display inline-block
			background-size 60%
			background url(/assets/img/icon-hamburger.svg)

		.menu-checkbox:checked ~ #topnav
			.menu-open
				background-size 60% !important
				ul
					display block

`}</style>

</Fragment>;

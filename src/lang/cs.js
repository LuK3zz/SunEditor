'use strict';

(function (global, factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        module.exports = global.document ?
            factory(global, true) :
            function (w) {
                if (!w.document) {
                    throw new Error('SUNEDITOR_LANG a window with a document');
                }
                return factory(w);
            };
    } else {
        factory(global);
    }
}(typeof window !== 'undefined' ? window : this, function (window, noGlobal) {
    const lang = {
        code: 'cs',
        toolbar: {
            default: 'Výchozí',
            save: 'Uložit',
            font: 'Písmo',
            formats: 'Formáty',
            fontSize: 'Velikost',
            bold: 'Tučně',
            underline: 'Podtrhnutí',
            italic: 'Kurzíva',
            strike: 'Strike',
            subscript: 'Dolní index',
            superscript: 'Horní index',
            removeFormat: 'Odebrat formát',
            fontColor: 'Barva písma',
            hiliteColor: 'Barby zvýraznění textu',
            indent: 'Odrážka',
            outdent: 'Změnšit odražení',
            align: 'Zarovnání',
            alignLeft: 'Zarovnat doleva',
            alignRight: 'Zarovnat doprava',
            alignCenter: 'Zarovnat doprostřed',
            alignJustify: 'Zarovat do bloku',
            list: 'List',
            orderList: 'Ordered list',
            unorderList: 'Unordered list',
            horizontalRule: 'Vodorovná čára',
            hr_solid: 'Pevný',
            hr_dotted: 'Tečkovaný',
            hr_dashed: 'Dashed',
            table: 'Tabulka',
            link: 'Odkaz',
            math: 'Matematika',
            image: 'Obrázek',
            video: 'Video',
            audio: 'Audio',
            fullScreen: 'Celá obrazovka',
            showBlocks: 'Ukázat bloky',
            codeView: 'Zdrojový kód',
            undo: 'Vrátit',
            redo: 'Opakovat psaní',
            preview: 'Náhled',
            print: 'Tisk',
            tag_p: 'Odstavec',
            tag_div: 'Normální (DIV)',
            tag_h: 'Hlavička',
            tag_blockquote: 'Citát',
            tag_pre: 'Kód',
            template: 'Šablona',
            lineHeight: 'Řádkování',
            paragraphStyle: 'Styl odstavce',
            textStyle: 'Styl textu',
            imageGallery: 'Galerie obrázků',
            mention: 'Zmínka'
        },
        dialogBox: {
            linkBox: {
                title: 'Vložit odkaz',
                url: 'URL pro odkaz',
                text: 'Text k zobrazení',
                newWindowCheck: 'Otevření v novém okně',
                downloadLinkCheck: 'Odkaz ke stažení',
                bookmark: 'Záložka'
            },
            mathBox: {
                title: 'Matematika',
                inputLabel: 'Matematický zápiš',
                fontSizeLabel: 'Velikost písma',
                previewLabel: 'Náhled'
            },
            imageBox: {
                title: 'Vložit obrázek',
                file: 'Vyberte ze souboru',
                url: 'URL obrázku',
                altText: 'Alternativní text'
            },
            videoBox: {
                title: 'Vložit video',
                file: 'Vyberte ze souboru',
                url: 'Adresa URL pro vložení medií (Youtube)'
            },
            audioBox: {
                title: 'Vložit zvuk',
                file: 'Vyberte ze souboru',
                url: 'Adresa URL zvuku'
            },
            browser: {
                tags: 'Značky',
                search: 'Vyhledávání',
            },
            caption: 'Vložte popis',
            close: 'Zavřít',
            submitButton: 'Potvrdit',
            revertButton: 'Vrátit zpět',
            proportion: 'Omezit proporce',
            basic: 'Základní',
            left: 'Vlevo',
            right: 'Vpravo',
            center: 'Uprostřed',
            width: 'Šířka',
            height: 'Výška',
            size: 'Velikost',
            ratio: 'Ppoměr'
        },
        controller: {
            edit: 'Upravit',
            unlink: 'Odpojit',
            remove: 'Odstranit',
            insertRowAbove: 'Vložit řádek výše',
            insertRowBelow: 'Vložit řádek níže',
            deleteRow: 'Vymazat řádek',
            insertColumnBefore: 'Vložit sloupec před',
            insertColumnAfter: 'Vložit sloupec po',
            deleteColumn: 'Smazat sloupec',
            fixedColumnWidth: 'Oprava šířka sloupce',
            resize100: 'Změnit velikost 100%',
            resize75: 'Změnit velikost 75%',
            resize50: 'Změnit velikost 50%',
            resize25: 'Změnit velikost 25%',
            autoSize: 'Automatická velikost',
            mirrorHorizontal: 'Zrcadlo, horizontální',
            mirrorVertical: 'Zrcadlo, vertikální',
            rotateLeft: 'Otočit vlevo',
            rotateRight: 'Otočit vpravo',
            maxSize: 'Maximální velikost',
            minSize: 'Minimální velikost',
            tableHeader: 'Záhlaví tabulky',
            mergeCells: 'Spojit buňky',
            splitCells: 'Rozdělit buňky',
            HorizontalSplit: 'Horizontální rozdělení',
            VerticalSplit: 'Vertikální rozdělení'
        },
        menu: {
            spaced: 'S mezerou',
            bordered: 'Ohraničení',
            neon: 'Neon',
            translucent: 'Průsvitný',
            shadow: 'Stín',
            code: 'Kód'
        }
    };

    if (typeof noGlobal === typeof undefined) {
        if (!window.SUNEDITOR_LANG) {
            Object.defineProperty(window, 'SUNEDITOR_LANG', {
                enumerable: true,
                writable: false,
                configurable: false,
                value: {}
            });
        }

        Object.defineProperty(window.SUNEDITOR_LANG, 'cs', {
            enumerable: true,
            writable: true,
            configurable: true,
            value: lang
        });
    }

    return lang;
}));

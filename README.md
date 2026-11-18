<p align="center"><img src="logo-dark.png" alt="مجلة الفكر المسيحي" width="420"></p>

# مجلة الفكر المسيحي – demo

Färdigbyggd demo av tidningens nya plattform (C# + React + SQL). Den körs helt i webbläsaren, utan server. All data sparas lokalt i webbläsaren och kan återställas under *الإدارة ← الاستيراد والإعدادات*.

Öppna `index.html` (eller GitHub Pages). Med raden **عرض تجريبي** byter du mellan delarna:

| Del | Adress |
|---|---|
| Tidningssidan (nyheter, nummer, om oss, prenumeration, kontakt, radio) | `index.html#/` |
| Medlemsappen – läsa, lyssna, notiser | `index.html#/member` |
| Författarportalen – skriva och spela in | `index.html#/author` |
| Admin – granskning, nummer och design, användare, rollmatris, radio, import | `index.html#/admin` |

**Demokonton** (klicka på dem på inloggningssidan, lösenord `Demo123!`):
`member@alfikr.demo` · `author@alfikr.demo` · `editor@alfikr.demo` · `admin@alfikr.demo` · `radio@alfikr.demo`

### Prova hela flödet
1. **الكتّاب** → logga in som författare → *مقال جديد* → skriv (eller spela in) → *إرسال للمراجعة*.
2. **الإدارة** → logga in som redaktör → *مراجعة المقالات* → öppna artikeln, redigera → välj *العدد 3* → *موافقة*.
3. *الأعداد* → *العدد 3* → välj layout, färg och omslag → *نشر العدد*.
4. **الأعضاء** → logga in som medlem → notisen om det nya numret dyker upp → läs eller lyssna.

Källkoden finns i det privata repot `al_fikeralmasihi`. Nyheterna och bilderna kommer från christianthoughtirq.com. Artiklarna i numren är exempeltexter.

(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{411:function(t,a,s){"use strict";s.r(a);var n=s(38),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"migrations"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#migrations"}},[t._v("#")]),t._v(" Migrations")]),t._v(" "),s("p",[t._v("Twill's generated migrations are standard Laravel migrations, enhanced with helpers to create the default fields any CRUD module will use:")]),t._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token php language-php"}},[s("span",{pre:!0,attrs:{class:"token delimiter important"}},[t._v("<?php")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// main table, holds all non translated fields")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token class-name static-context"}},[t._v("Schema")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("create")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'table_name_plural'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name type-declaration"}},[t._v("Blueprint")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$table")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createDefaultTableFields")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$table")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// will add the following inscructions to your migration file")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// $table->increments('id');")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// $table->softDeletes();")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// $table->timestamps();")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// $table->boolean('published');")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// translation table, holds translated fields")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token class-name static-context"}},[t._v("Schema")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("create")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'table_name_singular_translations'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name type-declaration"}},[t._v("Blueprint")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$table")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createDefaultTranslationsTableFields")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$table")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'tableNameSingular'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// will add the following inscructions to your migration file")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// createDefaultTableFields($table);")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// $table->string('locale', 6)->index();")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// $table->boolean('active');")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// $table->integer("{$tableNameSingular}_id")->unsigned();')]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// $table->foreign(\"{$tableNameSingular}_id\", \"fk_{$tableNameSingular}_translations_{$tableNameSingular}_id\")->references('id')->on($table)->onDelete('CASCADE');")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// $table->unique([\"{$tableNameSingular}_id\", 'locale']);")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// slugs table, holds slugs history")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token class-name static-context"}},[t._v("Schema")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("create")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'table_name_singular_slugs'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name type-declaration"}},[t._v("Blueprint")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$table")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createDefaultSlugsTableFields")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$table")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'tableNameSingular'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// will add the following inscructions to your migration file")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// createDefaultTableFields($table);")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// $table->string('slug');")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// $table->string('locale', 6)->index();")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// $table->boolean('active');")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// $table->integer("{$tableNameSingular}_id")->unsigned();')]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// $table->foreign(\"{$tableNameSingular}_id\", \"fk_{$tableNameSingular}_translations_{$tableNameSingular}_id\")->references('id')->on($table)->onDelete('CASCADE')->onUpdate('NO ACTION');")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// revisions table, holds revision history")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token class-name static-context"}},[t._v("Schema")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("create")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'table_name_singular_revisions'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name type-declaration"}},[t._v("Blueprint")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$table")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createDefaultRevisionTableFields")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$table")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'tableNameSingular'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// will add the following inscructions to your migration file")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// $table->increments('id');")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// $table->timestamps();")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// $table->json('payload');")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// $table->integer("{$tableNameSingular}_id")->unsigned()->index();')]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// $table->integer('user_id')->unsigned()->nullable();")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// $table->foreign(\"{$tableNameSingular}_id\")->references('id')->on(\"{$tableNamePlural}\")->onDelete('cascade');")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// $table->foreign('user_id')->references('id')->on('users')->onDelete('set null');")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// related content table, holds many to many association between 2 tables")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token class-name static-context"}},[t._v("Schema")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("create")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'table_name_singular1_table_name_singular2'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name type-declaration"}},[t._v("Blueprint")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$table")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createDefaultRelationshipTableFields")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$table")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$table1NameSingular")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$table2NameSingular")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// will add the following inscructions to your migration file")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// $table->integer("{$table1NameSingular}_id")->unsigned();')]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// $table->foreign(\"{$table1NameSingular}_id\")->references('id')->on($table1NamePlural)->onDelete('cascade');")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// $table->integer("{$table2NameSingular}_id")->unsigned();')]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// $table->foreign(\"{$table2NameSingular}_id\")->references('id')->on($table2NamePlural)->onDelete('cascade');")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// $table->index(["{$table2NameSingular}_id", "{$table1NameSingular}_id"]);')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])]),s("p",[t._v("A few CRUD controllers require that your model have a field in the database with a specific name: "),s("code",[t._v("published")]),t._v(", "),s("code",[t._v("publish_start_date")]),t._v(", "),s("code",[t._v("publish_end_date")]),t._v(", "),s("code",[t._v("public")]),t._v(", and "),s("code",[t._v("position")]),t._v(", so stick with those column names if you are going to use publication status, timeframe and reorderable listings.")])])}),[],!1,null,null,null);a.default=e.exports}}]);
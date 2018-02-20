#![feature(plugin)]
#![plugin(rocket_codegen)]

extern crate rocket;
extern crate rocket_contrib;

use rocket_contrib::Template;
use std::path::{Path, PathBuf};
use rocket::response::NamedFile;
use std::collections::HashMap;

#[get("/")]
fn index() -> Template {
    let context: HashMap<String, String> = HashMap::new();
    Template::render("index", &context)
}

#[get("/aboutme")]
fn about_me() -> Template {
    let context: HashMap<String, String> = HashMap::new();
    Template::render("aboutme", &context)
}

#[get("/<file..>")]
fn files(file: PathBuf) -> Option<NamedFile> {
    NamedFile::open(Path::new("static/").join(file)).ok()
}

fn main() {
    rocket::ignite().mount("/", routes![index, files, about_me]).attach(Template::fairing()).launch();
}
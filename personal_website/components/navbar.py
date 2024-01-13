import reflex as rx
from personal_website.styles.styles import Size as Size
from personal_website.styles.colors import TextColor as TextColor
from personal_website.styles.colors import Color as Color
import personal_website.styles.styles as styles



def navbar() -> rx.Component:
    return rx.hstack(
        rx.box(
            rx.hstack(
                rx.link("cmuros", color=Color.PRIMARY.value, href="/"),
                rx.link("dev", color=Color.SECONDARY.value, href="/"),
                style=styles.navbar_title_style,
            )  
        ),
        position="sticky",
        bg=Color.CONTENT.value,
        padding_x=Size.BIG.value,
        padding_y=Size.DEFAULT.value,
        z_index="999",
        top="0"
    )  
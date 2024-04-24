# Generated by Django 5.0.4 on 2024-04-24 16:17

import django.utils.timezone
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('productos', '0006_alter_product_imagen'),
    ]

    operations = [
        migrations.AddField(
            model_name='product',
            name='FECHA_ENTRADA',
            field=models.DateTimeField(auto_now_add=True, default=django.utils.timezone.now),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='product',
            name='IMAGEN',
            field=models.ImageField(upload_to='image/'),
        ),
    ]
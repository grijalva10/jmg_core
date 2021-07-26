from setuptools import setup, find_packages

with open('requirements.txt') as f:
	install_requires = f.read().strip().split('\n')

# get version from __version__ variable in jmg_core/__init__.py
from jmg_core import __version__ as version

setup(
	name='jmg_core',
	version=version,
	description='core',
	author='JMG',
	author_email='jmg@fake.com',
	packages=find_packages(),
	zip_safe=False,
	include_package_data=True,
	install_requires=install_requires
)

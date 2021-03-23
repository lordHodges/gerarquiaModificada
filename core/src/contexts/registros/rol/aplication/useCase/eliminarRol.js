class EliminarRol {
	constructor({ RolDomainRepository }) {
		this._domainRepository = RolDomainRepository;
	}
	async exe(id) {
		return await this._domainRepository.delete(id);
	}
}
module.exports = EliminarRol;

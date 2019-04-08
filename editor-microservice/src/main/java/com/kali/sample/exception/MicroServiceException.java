package com.kali.sample.exception;

/**
 * Base Exception.
 * 
 * @author kali
 *
 */
public class MicroServiceException extends Exception {

	/**
	 * serialVersionUID.
	 */
	private static final long serialVersionUID = 5063624289103438150L;

	/**
	 * message d'erreur.
	 */
	private String message;

	/**
	 * code d'erreur.
	 */
	private String code;

	/**
	 * Default constructor (for serialization)
	 */
	public MicroServiceException() {
		super();
	}

	/**
	 * Constructor.
	 *
	 * @param message : error message.
	 */
	public MicroServiceException(String message) {
		super(message);
	}

	/**
	 * Constructor.
	 *
	 * @param code    : error code.
	 * @param message : error message.
	 */
	public MicroServiceException(String code, String message) {
		super(message);
		this.code = code;
	}

	/**
	 * Constructor.
	 *
	 * @param message   : error message.
	 * @param exception : exception instanciated
	 */
	public MicroServiceException(String message, Throwable exception) {
		super(message, exception);
	}

	/**
	 * Constructor.
	 *
	 * @param exception : exception instanciated
	 */
	public MicroServiceException(Throwable exception) {
		super(exception);
	}

	/**
	 * Constructor.
	 *
	 * @param code      : error code.
	 * @param message   : error message.
	 * @param exception : exception instanciated
	 */
	public MicroServiceException(String code, String message, Throwable exception) {
		super(message, exception);
		this.code = code;
	}

	@Override
	public String getMessage() {
		if (message != null) {
			return message;
		} else {
			if (super.getMessage() != null) {
				return super.getMessage();
			} else if (super.getCause() != null && super.getCause().getMessage() != null) {
				return super.getCause().getMessage();
			}
			return null;
		}
	}

	/**
	 * @return the code
	 */
	public String getCode() {
		return code;
	}
}
